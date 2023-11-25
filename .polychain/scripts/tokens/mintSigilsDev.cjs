// axons - 0x60772bC683108a7f83619e313EBA111eE8e88F8f
const ethers = require('ethers');
const contract = require('../../artifacts/contracts/PolymathSigils.sol/PolymathSigils.json');
const dotenv = require('dotenv')
dotenv.config();

const token_uri = {
  "name": "Polymath Sigil 0x001",
  "description": "the very first minted polymath sigil, for developing the polychain assets themselves.",
  "image": "ipfs://bafybeidrc3z3qorxvluwh5ejbvezndalmfitu5vgg4fomybtqywzrwghmi"
}

const CONTRACT_ADDRESS = "0xeddF5D69e31715b5eD1498E3FCb5cdAe919EcD0f"

const alchemyProvider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/1Bk4729LeT8KK9mjIKp7PbEr-wOPlWKL");

const signer = new ethers.Wallet(process.env.SIGNING_PRIVATE_KEY, alchemyProvider);

const sigil = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

sigil.safeMint("0x92952D53637FA170aBBe255951Bd73483B0e059e","1", {"gasLimit": "10000000"}).then(res => {
  console.log(res)
})
// async function mintSigil() {
//   const minter = await sigil.safeMint("0x92952D53637FA170aBBe255951Bd73483B0e059e", "ipfs://bafybeidrc3z3qorxvluwh5ejbvezndalmfitu5vgg4fomybtqywzrwghmi",{gasLimit: 10000000});
//   await minter.wait((res) => {
//     console.log(res)
//   })
// }

// mintSigil();