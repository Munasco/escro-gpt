import { call, LookupMap, NearBindgen, view, assert, near, UnorderedMap, NearPromise } from "near-sdk-js";
import { run_validate_method_on_asset } from "./validate";
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from 'openai';
import * as fs from 'fs';
@NearBindgen({})
export class EscrowContract {
    GAS_FEE: bigint = BigInt(30_000_000_000_000); // 30 TGAS
    accountsReceivers: LookupMap<string> = new LookupMap("ea");
    accountsValueLocked: LookupMap<string> = new LookupMap("avl");
    accountAssetsQuantity: LookupMap<string> = new LookupMap("aa");
    accountsTimeCreated: UnorderedMap<string> = new UnorderedMap("atc");
    accountsAssetContractId: LookupMap<string> = new LookupMap("aac");

    internalSendNEAR(receivingAccountId: string, amountBigInt: bigint): void {
        assert(amountBigInt > BigInt("0"), "The amount should be a positive number");
        assert(receivingAccountId != near.currentAccountId(), "Can't transfer to the contract itself");
        assert(amountBigInt < near.accountBalance(), `Not enough balance ${near.accountBalance()} to cover transfer of ${amountBigInt} yoctoNEAR`);
        const promise = NearPromise.new(receivingAccountId);
        near.log(`Sending ${amountBigInt} yoctoNEAR to ${receivingAccountId} in internalSendNEAR`);
        promise.transfer(amountBigInt);
        promise.onReturn();
    }

    internalCompleteNEARTransaction(sellerAccountId: string, amountBigInt: bigint, buyerAccountId: string): void {
        this.internalSendNEAR(sellerAccountId, amountBigInt);
        this.accountsReceivers.remove(buyerAccountId);
        near.log(`Removing ${buyerAccountId} from accountsReceivers`);
        this.accountsValueLocked.remove(buyerAccountId);
        this.accountAssetsQuantity.remove(buyerAccountId);
        this.accountsAssetContractId.remove(buyerAccountId);
        this.accountsTimeCreated.remove(buyerAccountId);
    }


    internalCrossContractTransferAsset(assetContractId: string, quantityBigInt: bigint, fromAccountId: string, toAccountId: string): void {
        const promise = NearPromise.new(assetContractId);
        promise.functionCall(
            "transfer_asset",
            JSON.stringify({ quantity: quantityBigInt.toString(), from_account_id: fromAccountId, to_account_id: toAccountId }),
            BigInt(0),
            this.GAS_FEE
        );
        promise.onReturn();
    }

    validate_purchase_asset({ validate, buyer_account_id, asset_contract_id }: { validate: boolean, buyer_account_id: string, asset_contract_id: string }): void {
        const callerId: string = near.predecessorAccountId();
        assert(callerId === 'ai_escrow.testnet', 'Only the ai_escrow.testnet account can call this method');
        if (validate) {
            // approve purchase, call approve_purchase
            const promise = NearPromise.new(this.accountsAssetContractId.get(buyer_account_id)!);
            promise.functionCall("approve_purchase", JSON.stringify({
                buyer_account_id: buyer_account_id,
                asset_contract_id: asset_contract_id
            }), BigInt(0), this.GAS_FEE).onReturn();
            near.log(`Approved purchase of ${asset_contract_id} by ${buyer_account_id}`);
        }
        else {
            // cancel purchase, call cancel_purchase
            const promise = NearPromise.new(this.accountsAssetContractId.get(buyer_account_id)!);
            promise.functionCall("cancel_purchase", JSON.stringify({
                buyer_account_id: buyer_account_id,
                asset_contract_id: asset_contract_id
            }), BigInt(0), this.GAS_FEE).onReturn();
            near.log(`Cancelled purchase of ${asset_contract_id} by ${buyer_account_id}`);
        }
    }


    @call({ payableFunction: true })
    purchase_in_escrow({ seller_account_id, asset_contract_id, validation_user_request }: { seller_account_id: string, asset_contract_id: string, validation_user_request?: string }): NearPromise {
        const nearAttachedAmount: bigint = near.attachedDeposit();
        const nearAmount: bigint = nearAttachedAmount - BigInt(this.GAS_FEE);
        const buyerAccountId: string = near.predecessorAccountId();
        assert(nearAmount > 0, "Must attach a positive amount");
        assert(!this.accountsValueLocked.containsKey(buyerAccountId), "Cannot escrow purchase twice before completing one first: feature not implemented");
        assert(seller_account_id !== buyerAccountId, "Cannot escrow to the same account");
        assert(buyerAccountId !== near.currentAccountId(), "Cannot escrow from the contract itself");

        this.accountsReceivers.set(buyerAccountId, seller_account_id);
        this.accountsValueLocked.set(buyerAccountId, nearAttachedAmount.toString());
        this.accountsAssetContractId.set(buyerAccountId, asset_contract_id);
        this.accountsTimeCreated.set(buyerAccountId, near.blockTimestamp().toString());
        this.accountAssetsQuantity.set(buyerAccountId, "0");
        const promise = NearPromise.new(asset_contract_id);
        near.log(`Escrow purchase from ${asset_contract_id} ${buyerAccountId} to ${seller_account_id} for ${nearAmount} yoctoNEAR`);
        near.log(`Promise as return ${promise.asReturn()}}`)
        promise.functionCall("escrow_purchase_asset", JSON.stringify({
            seller_account_id,
            buyer_account_id: buyerAccountId,
            attached_near: nearAmount.toString()
        }),
            BigInt(0), this.GAS_FEE)
            .then(
                NearPromise.new(near.currentAccountId())
                    .functionCall("internalPurchaseEscrow", JSON.stringify({ validation_user_request, buyerAccountId, asset_contract_id }), BigInt(0), this.GAS_FEE)
            );
        return promise.asReturn();
    }

    @call({ privateFunction: true })
    internalPurchaseEscrow({ validation_user_request, buyer_account_id, asset_contract_id }: { validation_user_request: string, buyer_account_id: string, asset_contract_id: string }): void {
        const promiseResult: string = near.promiseResult(0 as number);
        near.log(`Escrow purchase result: ${promiseResult}`)
        const promiseObject = JSON.parse(promiseResult);
        if (promiseObject.success === false) {
            const amount: bigint = BigInt(this.accountsValueLocked.get(promiseObject.buyer_account_id)!);
            near.log(`Escrow purchase failed, returning ${amount} yoctoNEAR to: ${promiseObject.buyer_account_id}`);
            this.internalCompleteNEARTransaction(promiseObject.buyer_account_id, amount, promiseObject.buyer_account_id);
            return;
        }
        const buyerAccountId: string = promiseObject.buyer_account_id;
        const quantity: bigint = BigInt(promiseObject.quantity);
        this.accountAssetsQuantity.set(buyerAccountId, quantity.toString());


    }

    @call({})
    escrow_timeout_scan({ }: {}): void {
        const callerId: string = near.predecessorAccountId();
        const timeout: bigint = callerId === "test.near" ? BigInt(-1) : BigInt(86_400_000_000_000); // 24 hours in nanoseconds. Testing workaround until fast-forward is implemented in workspaces-js
        const keys = this.accountsTimeCreated.toArray();
        keys.forEach(([buyerAccountId, _]: [string, string]) => {
            const timeCreatedStr: string | null = this.accountsTimeCreated.get(buyerAccountId);
            if (timeCreatedStr) {
                const timeCreated: bigint = BigInt(timeCreatedStr);
                if (timeCreated + timeout < near.blockTimestamp()) {
                    const receiverId: string = this.accountsReceivers.get(buyerAccountId)!;
                    const amount: bigint = BigInt(this.accountsValueLocked.get(buyerAccountId)!);
                    this.internalCompleteNEARTransaction(receiverId, amount, buyerAccountId);
                }
            }
        });
    }

    @call({})
    approve_purchase({ }: {}): void {
        const buyerAccountId: string = near.predecessorAccountId();
        assert(this.accountsValueLocked.containsKey(buyerAccountId), "Cannot approve escrow purchase before escrowing");
        const sellerAccountId: string = this.accountsReceivers.get(buyerAccountId)!;
        const amount: bigint = BigInt(this.accountsValueLocked.get(buyerAccountId)!);
        near.log(`Approving escrow purchase of ${amount} yoctoNEAR from: ${buyerAccountId} to: ${sellerAccountId}`);
        this.internalCompleteNEARTransaction(sellerAccountId, amount, buyerAccountId);
    }

    @call({})
    cancel_purchase({ }: {}): void {
        const buyerAccountId: string = near.predecessorAccountId();
        const amountStr: string | null = this.accountsValueLocked.get(buyerAccountId);
        assert(amountStr, `No escrow purchase found for buyer: ${buyerAccountId}`);
        const amount: bigint = BigInt(amountStr);
        const sellerAccountId: string = this.accountsReceivers.get(buyerAccountId)!;
        const assetContractId: string = this.accountsAssetContractId.get(buyerAccountId)!;
        const quantity: bigint = BigInt(this.accountAssetsQuantity.get(buyerAccountId)!);
        this.internalCompleteNEARTransaction(buyerAccountId, amount, buyerAccountId); // return funds to buyer
        const promise = NearPromise.new(assetContractId);
        promise.functionCall("devalidate_asset", JSON.stringify({
            seller_account_id: sellerAccountId,
            buyer_account_id: buyerAccountId,
        }),
            BigInt(0), this.GAS_FEE).onReturn();
        near.log(`Canceling escrow purchase of ${quantity} from: ${buyerAccountId} to: ${sellerAccountId}`);
        // this.internalCrossContractTransferAsset(assetContractId, quantity, buyerAccountId, sellerAccountId);
    }

    @view({})
    view_pending_escrow({ account_id }: { account_id: string }): any {
        return {
            receiver_id: this.accountsReceivers.get(account_id),
            amount: this.accountsValueLocked.get(account_id),
            time_created: this.accountsTimeCreated.get(account_id),
        };
    }

}
