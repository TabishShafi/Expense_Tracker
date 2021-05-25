
    const ABI =
	[
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_amount",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "_description",
					"type": "string"
				}
			],
			"name": "addExpense",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_amount",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "_description",
					"type": "string"
				}
			],
			"name": "addIncome",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getBalance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getExpense",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getExpenseIncomeMapping",
			"outputs": [
				{
					"components": [
						{
							"internalType": "uint256",
							"name": "amount",
							"type": "uint256"
						},
						{
							"internalType": "string",
							"name": "description",
							"type": "string"
						}
					],
					"internalType": "struct ExpenseTracker.expenseStruct[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getIncome",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]
const contractAddress = "0xe31De61ecf2118e82a9D7E0B5F969058f0759184";


async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
         window.ethereum.enable();
    }
}
async function load() {
    await loadWeb3();
    window.contract = await loadContract();
	printBalance();
	printIncome();
	printExpense();
	printList();
}

 async function loadContract() {
     return await new window.web3.eth.Contract(ABI, contractAddress);
 }

 async function printBalance() {
	
	const account = await getCurrentAccount();
     const _balance = await window.contract.methods.getBalance().call({from: account});
     const balanceEl = document.getElementById('balance');
    balanceEl.innerHTML = "Your Balance" + "<br />" + "$" + _balance;
	 
}


async function printIncome() {
	
	const account = await getCurrentAccount();
     const _income = await window.contract.methods.getIncome().call({from: account});
     const IncomeEl = document.getElementById('income');
    IncomeEl.innerHTML = "INCOME" + "<br />" + "$" + _income;
	 
}


async function printExpense() {
	
	const account = await getCurrentAccount();
     const _expense = await window.contract.methods.getExpense().call({from: account});
     const expenseEl = document.getElementById('expense');
    expenseEl.innerHTML = "EXPENSE" + "<br />" + "$" + _expense;

}
async function printList() {
	
	let amount = [];
	const account = await getCurrentAccount();
    amount = await window.contract.methods.getExpenseIncomeMapping().call({from: account});
	 
	// document.getElementById("array-list").innerHTML =  amount[2];

	 document.getElementById("array-list").innerHTML = amount.map((transObj )=>
    	{
        return("<li>"+ "<span>" + transObj[1] +  "</span>" +
		"<span>" +transObj[0] + "</span>"
		+"</li>")                    
    	})
	 

}

async function addExpense()
{
	const _description= document.getElementById("expense-description").value;
	const _amount = document.getElementById("expense-amount").value;
	const account = await getCurrentAccount();
    const _expense = await window.contract.methods.addExpense(_amount,_description).send({from: account});
	document.getElementById("expense-description").value="";
	document.getElementById("expense-amount").value="";
	location.reload();
}

async function addIncome()
{
	const _description= document.getElementById("income-description").value;
	const _amount = document.getElementById("income-amount").value;
	const account = await getCurrentAccount();
    const _income = await window.contract.methods.addIncome(_amount,_description).send({from: account});
	document.getElementById("income-description").value="";
	document.getElementById("income-amount").value="";
	location.reload();
}



async function getCurrentAccount() {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}
    
load();