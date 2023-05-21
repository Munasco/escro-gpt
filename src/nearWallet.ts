import nearApi from "near-api-js";
// wallet selector UI
import '@near-wallet-selector/modal-ui/styles.css';
import { setupModal } from '@near-wallet-selector/modal-ui';

// wallet selector options
import { setupWalletSelector } from '@near-wallet-selector/core';
import { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';


export const login = async () => {
    const keyStore = new nearApi.keyStores.UnencryptedFileSystemKeyStore(
        "/Users/Munachi/.near-credentials/testnet/mainasset.testescrow.testnet.json"
    );
    const near = await nearApi.connect({
        networkId: "testnet",
        keyStore,
        nodeUrl: "https://rpc.testnet.near.org",
    });
    const account = await near.account("testescrow.testnet");
    return account;
}
/* A helper file that simplifies using the wallet selector */

// near api j

const THIRTY_TGAS = '30000000000000';
const NO_DEPOSIT = '0';

// Wallet that simplifies using the wallet selector
export class Wallet {
    walletSelector: any;
    wallet: any;
    network: any;
    createAccessKeyFor?: any;
    accountId: any;

    constructor({ createAccessKeyFor = "", network = 'testnet' }) {
        // Login to a wallet passing a contractId will create a local
        // key, so the user skips signing non-payable transactions.
        // Omitting the accountId will result in the user being
        // asked to sign all transactions.
        this.createAccessKeyFor = createAccessKeyFor
        this.network = 'testnet'
    }

    // To be called when the website loads
    async startUp() {
        this.walletSelector = await setupWalletSelector({
            network: this.network,
            modules: [setupMyNearWallet({ walletUrl: 'https://wallet.testnet.near.org' })],

        });

        const isSignedIn = this.walletSelector.isSignedIn();

        if (isSignedIn) {
            this.wallet = await this.walletSelector.wallet();
            this.accountId = this.walletSelector.store.getState().accounts[0].accountId;
        }

        return isSignedIn;
    }

    // Sign-in method
    signIn() {
        const description = 'Please select a wallet to sign in.';
        const modal = setupModal(this.walletSelector, { contractId: this.createAccessKeyFor ?? "", description });
        modal.show();
    }

    // Sign-out method
    signOut() {
        this.wallet.signOut();
        this.wallet = this.accountId = this.createAccessKeyFor = null;
        window.location.replace(window.location.origin + window.location.pathname);
    }





}