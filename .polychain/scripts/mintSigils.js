// scripts/index.js //

async function main () {
  // const accounts = await ethers.provider.listAccounts();
	// console.log(accounts);

	const address = '0x745595Aa74840465b033A7e43850D9D618e6C5E9';
	const PolymathSigils = await ethers.getContractFactory('PolymathSigils');
	const polymathSigils = await PolymathSigils.attach(address);
	polymathSigils.safeMint('0x3473B6AFb79df0Be78afCfA947ae554Ba7bd367E','0001').then((res) => {
		console.log(res);
	})
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });