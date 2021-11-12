require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan renew stick slow good clog metal giggle'; 
let testAccounts = [
"0x78f5c2fcc8be34b2c4c430fe3b4a2c685a27c92fce958939a0fcb838056bc413",
"0x82139070654c272170dab744919d1b95ded99113530f6dfa96c47de4b4d1bd7f",
"0xb7ae9a39fe76033a633646b1bd78881e330a200dd3622e85a19894a8392b390a",
"0x4208b4b1061a434785f1309fc41a1fae7df0f879d61f21375aafb6e0a4b9f01c",
"0x4ae6d961227ee8b89d6a1fb060f2c577f82c1a687fc7b95c7aba489931298bd1",
"0x2e41b82f33899ba314c3eed3845039eeb2cab686b8bf369e1bab72721665d307",
"0xe4f09989df81e0f88b23119ff3d14f86b4fd71d9412ebe3eadec225b099a6415",
"0x6faae0ac2e6b1298172a07368b68294bafc5342e2402e2fb643d9e0bd20197e6",
"0x75e362bfb919e7f8f395214f7d1f08c44185214027bc94ea66f2d6be4a466a38",
"0x4ffc8d5f55aa73c24fee8ec439296024c14bd3c86b16cc7862fd01636cbeced2"
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
            version: '^0.8.0'
        }
    }
};

