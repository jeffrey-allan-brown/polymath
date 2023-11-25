import { Network, Alchemy } from 'alchemy-sdk';
import 'dotenv/config';

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_TESTNET
}

const alchemy = new Alchemy(settings);


alchemy.core.getTokenBalances("0x92952D53637FA170aBBe255951Bd73483B0e059e").then(console.log);

