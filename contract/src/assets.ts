import { call, LookupMap, NearBindgen, assert, near, view, initialize } from "near-sdk-js";

@NearBindgen({ requireInit: true })
export class AssetContract {
  assetPrice: string = "";
  escrowContractId: string = "";
  totalSupply: string = "0";
  accountAssetsQuantity: LookupMap<string> = new LookupMap("aa");
  accountAssetsItem: string = "";
  mainOwnerId: string = "";
  pendingAccountAssets: LookupMap<string> = new LookupMap("paa");


  @initialize({})
  init({ owner_id, total_supply, escrow_contract_id, asset_price, asset_item }: { owner_id: string, total_supply: string, escrow_contract_id: string, asset_price: string, asset_item: string }): void {
    assert(BigInt(total_supply) > BigInt(0), "Total supply should be a positive number");
    assert(this.totalSupply === "0", "Contract is already initialized");
    this.totalSupply = total_supply;
    this.escrowContractId = escrow_contract_id;
    this.assetPrice = asset_price;
    this.mainOwnerId = owner_id;
    this.accountAssetsQuantity.set(owner_id, this.totalSupply);
  }
  @call({})
  get_asset_item({ }): string {
    return this.accountAssetsItem;
  }

  @call({})
  escrow_purchase_asset({ seller_account_id, buyer_account_id, attached_near }: { seller_account_id: string, buyer_account_id: string, attached_near: string }): any {
    try {
      assert(near.predecessorAccountId() === this.escrowContractId, `Only escrow contract can call this method but called by ${near.predecessorAccountId()}`);
      assert(this.accountAssetsQuantity.containsKey(seller_account_id), `Seller account ${seller_account_id} does not own any assets`);
      assert(BigInt(this.assetPrice) <= BigInt(attached_near), `Attached ${attached_near} is not enough to buy the asset`);
      //confirm that quantity is less than the available supply from the seller



      const quantity: bigint = BigInt(attached_near) / BigInt(this.assetPrice);
      const sellerAssets: bigint = BigInt(this.accountAssetsQuantity.get(seller_account_id)!);

      // Deduct the quantity from the seller's assets
      const sellerNewAssets: bigint = sellerAssets - quantity;

      // If seller's new assets are 0 or less, transfer all assets to the buyer
      if (sellerNewAssets <= BigInt(0)) {
        this.accountAssetsQuantity.remove(seller_account_id);
        const receivingAccountNewAssets: bigint = this.accountAssetsQuantity.containsKey(buyer_account_id) ? BigInt(this.accountAssetsQuantity.get(buyer_account_id)!) + sellerAssets : sellerAssets;
        this.accountAssetsQuantity.set(buyer_account_id, receivingAccountNewAssets.toString());
      } else {
        // Ensure the seller has enough assets to sell

        // Update the seller's and buyer's assets
        this.accountAssetsQuantity.set(seller_account_id, sellerNewAssets.toString());
        const receivingAccountNewAssets: bigint = this.accountAssetsQuantity.containsKey(buyer_account_id) ? BigInt(this.accountAssetsQuantity.get(buyer_account_id)!) + quantity : quantity;
        this.accountAssetsQuantity.set(buyer_account_id, receivingAccountNewAssets.toString());
      }

      near.log("success: ", seller_account_id, buyer_account_id, quantity.toString(), attached_near, this.assetPrice, this.accountAssetsQuantity.get(buyer_account_id))
      return { success: true, seller_account_id, buyer_account_id, quantity: quantity.toString(), amount: attached_near, asset_account_id: near.currentAccountId() };
    } catch (e: any) {
      near.log("error: ", e, e.message, e.stack);
      return { success: false, error: e, message: e.message, stack: e.stack, seller_account_id, buyer_account_id, amount: attached_near, asset_account_id: near.currentAccountId() };
    }
  }

  @view({})
  get_total_supply({ }: {}): string {
    return this.totalSupply;
  }

  @view({})
  get_account_assets({ account_id }: { account_id: string }): string | null {
    return this.accountAssetsQuantity.get(account_id);
  }

  @call({})
  validate_asset({ buyer_account_id, seller_account_id }: { buyer_account_id: string, validate: boolean, seller_account_id: string }): void {
    assert(near.predecessorAccountId() === this.escrowContractId, `Only escrow contract can call this method but called by ${near.predecessorAccountId()}`);
    assert(this.accountAssetsQuantity.containsKey(seller_account_id), `Account ${seller_account_id} does not own any assets`);
    this.accountAssetsQuantity.set(buyer_account_id, this.pendingAccountAssets.get(buyer_account_id)!);

    if (this.pendingAccountAssets.containsKey(seller_account_id)) {
      this.accountAssetsQuantity.set(seller_account_id, this.pendingAccountAssets.get(seller_account_id)!);
    }
    this.mainOwnerId = this.accountAssetsQuantity.get(buyer_account_id)! > this.accountAssetsQuantity.get(this.mainOwnerId)! ? buyer_account_id : this.mainOwnerId;
    this.pendingAccountAssets.remove(buyer_account_id);
  }
  @call({})
  devalidate_asset({ buyer_account_id, seller_account_id }: { buyer_account_id: string, validate: boolean, seller_account_id: string }): void {
    assert(near.predecessorAccountId() === this.escrowContractId, `Only escrow contract can call this method but called by ${near.predecessorAccountId()}`);
    assert(this.accountAssetsQuantity.containsKey(seller_account_id), `Account ${seller_account_id} does not own any assets`);
    this.pendingAccountAssets.remove(buyer_account_id);
    if (this.pendingAccountAssets.containsKey(seller_account_id)) {
      this.pendingAccountAssets.remove(seller_account_id);
    }
  }

  @call({})
  transfer_asset({ quantity, from_account_id, to_account_id }: { quantity: string, from_account_id: string, to_account_id: string }): void {
    assert(near.predecessorAccountId() === this.escrowContractId, `Only escrow contract can call this method but called by ${near.predecessorAccountId()}`);
    const receivingAccountId: string = to_account_id;
    assert(this.accountAssetsQuantity.containsKey(from_account_id), `Sender account ${from_account_id} does not own any assets`);
    const senderAssets: bigint = BigInt(this.accountAssetsQuantity.get(from_account_id)!);
    assert(senderAssets >= BigInt(quantity), `Sender account ${from_account_id} does not own enough (${senderAssets.toString()} of required ${quantity}) assets`);
    const sellerNewAssets: bigint = senderAssets - BigInt(quantity);
    this.accountAssetsQuantity.set(from_account_id, sellerNewAssets.toString());
    if (this.accountAssetsQuantity.containsKey(receivingAccountId)) {
      const receivingAccountAssets: bigint = BigInt(this.accountAssetsQuantity.get(receivingAccountId)!);
      const receivingAccountNewAssets: bigint = receivingAccountAssets + BigInt(quantity);
      this.accountAssetsQuantity.set(receivingAccountId, receivingAccountNewAssets.toString());
      return;
    }
    this.accountAssetsQuantity.set(receivingAccountId, quantity);
  }
}
