# Step 1 
Inside polygon-nft :
```
npm install --save-dev hardhat && npx hardhat
npm install --save-dev @nomiclabs/hardhat-waffle 'ethereum-waffle@^3.0.0' @nomiclabs/hardhat-ethers 'ethers@^5.0.0'
npm install --save-dev chai
```

Fill .env with MetaMask private key

```
npm i dotenv
```


# Step 2 : 
- GO to faucet.polygon.technology
- put in Wallet Address, Metamask public adress and generate/send assets


# Step 3 :
- Go to app.pinata.cloud/pinmanager
- Create account
- Upload media file
- Update metadata.json with CID and name you want


# Step 4 :
npx hardhat run scripts/deploy-script.js --network matic
You get nft address from output of the command, save it.
NFT deployed to: 0x92D832245955240704358046687a4a4a6EF92FDe

# Step 5 : 
Update script variables "scripts/mint-script.js" with new information

## Optional :
to test that you have minted, update "scripts/get-token-script.js" with contract address 
and run : 
