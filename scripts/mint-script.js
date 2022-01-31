const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = "ipfs://QmaCPSnpbm88RUaiMMF4MQuVwKPceF2hqS8rb5mxVcWaua" //"ipfs://YOUR_METADATA_CID"
  const WALLET_ADDRESS = "0x9524ee2021d59569a5e261973B3AdabF6a8da573"  //"YOUR_WALLET_ADDRESS"
  const CONTRACT_ADDRESS = "0x92D832245955240704358046687a4a4a6EF92FDe"  //"YOUR NFT CONTRACT ADDRESS"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});