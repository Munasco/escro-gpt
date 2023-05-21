import { WalletHandler, RnsHandler, StorageHandler, FileIo } from "jackal.js";

const walletConfig = {
  signerChain: "lupulella-2",
  enabledChains: ["lupulella-2"],
  queryAddr: "https://testnet-grpc.jackalprotocol.com",
  txAddr: "https://testnet-rpc.jackalprotocol.com",
};
// put all these top level await in a function

async function uploadFile(): Promise<void> {
  const wallet = await WalletHandler.trackWallet(walletConfig);
  const rns = await RnsHandler.trackRns(wallet);
  const storage = await StorageHandler.trackStorage(wallet);
  const fileIo = await FileIo.trackIo(wallet);

  const walletAddress = "jkl1xxxxx";
  const duration = 720;
  const space = 1000000000;

  await storage.buyStorage(walletAddress, duration, space);
  const file = new File(["file content"], "filename.txt", { type: "text/plain" });

  const sourcesData = {
    data: null,
    exists: false,
    handler: null,
    key: "myUpload1",
    uploadable: file,
  };

  const sources = {
    myUpload1: sourcesData,
  };

  const parent = null; // You can use a specific IFolderHandler instance if needed
  const tracker = {
    Complete: 0,
    Timer: 0,
  };

  const result = await fileIo.uploadFiles(sources, parent, tracker);
  const fileId = result.myUpload1.data.address;
  console.log("File ID:", fileId);
}

uploadFile().then(() => {
  console.log("Upload complete");
});