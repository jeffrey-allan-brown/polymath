import { Network, Alchemy, Wallet, Utils } from "alchemy-sdk";
import dotenv from "dotenv";
dotenv.config();

const { ALCHEMY_API_KEY, SIGNING_PRIVATE_KEY } = process.env;

const settings = {
  apiKey: ALCHEMY_API_KEY,
  network: Network.ETH_TESTNET
}

const alchemy = new Alchemy(settings);
const wallet = new Wallet(PRIVATE_KEY);

const mintSigil = async () => {
  const transaction = {
    to: "0x92952D53637FA170aBBe255951Bd73483B0e059e",
    value: Utils.parseEther("0.001"),
    gasLimit: "21000",
    maxPriorityFeePerGas: Utils.parseUnits("5", "gwei"),
    maxFeePerGas: Utils.parseUnits("20", "gwei"),
    nonce: await alchemy.core.getTransactionCount(wallet.getAddress()),
    type: 2,
    chainId: 5,
    };

  const rawTransaction = await wallet.signTransaction(transaction);
  const response = await alchemy.transact.sendTransaction(rawTransaction)

  //Logging the response to the console
  console.log(response)
}

main();