// Import web3 library
const Web3 = require('web3');

// Connect to the local Ethereum node
const web3 = new Web3('http://localhost:8545');

// Set the contract address and ABI (Application Binary Interface)
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contractABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "newString",
                "type": "string"
            }
        ],
        "name": "storeString",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getString",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

// Create an instance of the contract using the address and ABI
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Store a string value in the contract
async function storeString(newString) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.storeString(newString).send({ from: accounts[0] });
}

// Get the stored string value from the contract
async function getString() {
    return contract.methods.getString().call();
}

// Example usage
storeString('Hello, Smart Contract!').then(() => {
    getString().then((result) => {
        console.log('Stored string:', result);
    });
});
