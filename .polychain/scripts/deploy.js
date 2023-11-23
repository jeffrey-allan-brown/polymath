// scripts/deploy.js //

async function main () {
  const PolymathAxons = await ethers.getContractFactory('PolymathAxons');
	const PolymathSigils = await ethers.getContractFactory('PolymathSigils');

  console.log('Deploying PolymathAxons...');
	console.log('Deploying PolymathSigils...');

  const polymathAxons = await PolymathAxons.deploy('0xfF21E407c47b098cA428d3d0c2A26aCF1e38968C');
	const polymathSigils = await PolymathSigils.deploy('0xe8Ed85DF272823472a99783c35ff031689d19Aaa');

  await polymathAxons.deployed();
	await polymathSigils.deployed();

  console.log('PolymathAxons deployed to:', polymathAxons.address);
	console.log('PolymathSigils deployed to:', polymathSigils.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });