require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name reward stereo color hunt private off general'; 
let testAccounts = [
"0x37c029f12d236664ff58480e241d193cd055fba539fed923d290203ce8041a95",
"0x76c7f37198c5437017f6f80341441aed8672d6ba633f0e7de3ac85c709c77781",
"0x7a6cbbe59ab169a7a7cc1c339fd162fb568dc830bd342277c8a21e37bc447fbc",
"0xe67e920c44eac4acb60bfdf568e3a37f568d2738a277086c73a06108d7c9f4db",
"0xb13daa12c4a3263e4d8041fcdc06ef50e775d2b1b766b31586d4349eb9299e14",
"0xcc4615d42328ee83f47389632ce488a4c2cee8012466da2283f2ee28743dbd19",
"0x805991338a2ebbba81a822e8f1f535f962629b4f00bace1fce8618183197029c",
"0xa991360108bdc1f2af534fe5f91a52443d79d0687b03066c2ea3beb6ce0d35d8",
"0x000f3f4ef48592f23d609986e239f2aa2a2a544e9716bda85c9224af46483e96",
"0x36dd217cac26a48893cdf21a351059beb758deff9259a7bc973a9ebab4e2be7e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
