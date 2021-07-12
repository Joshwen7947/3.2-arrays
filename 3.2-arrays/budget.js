const user = {
	currentBalance: 5000,
	transactionsMonthToDate: [{}],
};

user.transactionsMonthToDate = [
	{
		amount: 3000,
		type: 'deposit',
		category: 'Salary - Full Time',
	},
	{ category: 'Dining', amount: 50, type: 'withdrawal' },
	{ category: 'Dining', amount: 100, type: 'withdrawal' },
	{ category: 'Rent', amount: 2000, type: 'withdrawal' },
	{ category: 'Groceries', amount: 250, type: 'withdrawal' },
	{
		amount: 250,
		type: 'withdrawal',
		category: 'Transportation',
	},
	{
		amount: 250,
		type: 'withdrawal',
		category: 'Health',
	},
	{
		amount: 50,
		type: 'withdrawal',
		category: 'Travel - Fuel',
	},
	{ category: 'Living', amount: 650, type: 'withdrawal' },
	{ category: 'Groceries', amount: 500, type: 'withdrawal' },
	{ category: 'Living', amount: 250, type: 'withdrawal' },
	{ category: 'Living', amount: 250, type: 'withdrawal' },
	{
		amount: 5000,
		type: 'deposit',
		category: 'Salary - Part Time',
	},
	{ category: 'Groceries', amount: 450, type: 'withdrawal' },
	{
		amount: 58,
		type: 'withdrawal',
		category: 'Transportation',
	},
	{
		amount: 50,
		type: 'withdrawal',
		category: 'Health',
	},
	{
		amount: 100,
		type: 'withdrawal',
		category: 'Transportation',
	},
	{
		amount: 150,
		type: 'withdrawal',
		category: 'Transportation',
	},
	{ category: 'Groceries', amount: 100, type: 'withdrawal' },
	{
		amount: 100,
		type: 'withdrawal',
		category: 'Entertainment',
	},
	{
		amount: 500,
		type: 'withdrawal',
		category: 'Entertainment',
	},
	{ category: 'Groceries', amount: 300, type: 'withdrawal' },
	{
		amount: 500,
		type: 'withdrawal',
		category: 'Travel',
	},
	{
		amount: 1500,
		type: 'withdrawal',
		category: 'Travel',
	},
	{
		amount: 50,
		type: 'withdrawal',
		category: 'Travel',
	},
	{ category: 'Groceries', amount: 200, type: 'withdrawal' },
	{
		amount: 500,
		type: 'deposit',
		category: 'Portfolio Dividends',
	},
	{
		amount: 100,
		type: 'withdrawal',
		category: 'Entertainment',
	},
	{
		amount: 100,
		type: 'withdrawal',
		category: 'Travel',
	},
	{ category: 'Groceries', amount: 200, type: 'withdrawal' },
	{
		amount: 100,
		type: 'withdrawal',
		category: 'Entertainment',
	},
	{
		amount: 100,
		type: 'withdrawal',
		category: 'Health',
	},
];
// ///////////////
function deposit() {
	let depositArray = user.transactionsMonthToDate.filter(
		(e) => e.type === `deposit`
	);
	console.log(
		`There have been ` + depositArray.length + ` deposits in the account`
	);
	let totalAmount = depositArray.reduce(
		(total, current) => total + current.amount,
		0
	);
	console.log(`Your total balance is ` + totalAmount / 23000 + ` usd`);
}

deposit();

function withdrawal() {
	let withdrawalArray = user.transactionsMonthToDate.filter(
		(e) => e.type === `withdrawal`
	);
	console.log(
		`There have been ` +
			withdrawalArray.length +
			` withdrawals from the account`
	);
	let totalAmount = withdrawalArray.reduce(
		(total, current) => total - current.amount,
		4384
	);
	console.log(`Your balance after all transcations is ` + totalAmount + ` usd`);
}
withdrawal();

// Function to convert VND to USD
const usdToVND = 23000;

function vnd() {
	let vndToUSD = user.transactionsMonthToDate.filter(
		(e) => e.currency === `VND`
	);
	if (vndToUSD === `VND`) {
		let money = vndToUSD / 23000;
		console.log(money);
	}
}

vnd();

// function usd() {
// 	let usdTransactions = user.transactionsMonthToDate.filter(
// 		(e) => e.currency === `USD`
// 	);
// 	let usdDeposits = user.transactionsMonthToDate.filter(
// 		(e) => e.type === `deposit`
// 	);
// }

function returnBalance() {
	document.getElementById(`3.3`).innerHTML =
		`Your current balance is $` + user.currentBalance;
	document.getElementById(`3.3.1`).innerHTML = `Transaction History`;
	let withdrawalArray = user.transactionsMonthToDate.filter(
		(e) => e.type === `withdrawal`
	);
	let totalAmount = withdrawalArray.reduce(
		(total, current) => total - current.amount,
		4384
	);
	document.getElementById(`3.3.2`).innerText =
		`There have been ` +
		withdrawalArray.length +
		` withdrawals from the account`;
}
returnBalance();

function sortCats() {
	let grocery = user.transactionsMonthToDate.filter(
		(e) => e.category === `Groceries`
	);
	let entertainment = user.transactionsMonthToDate.filter(
		(e) => e.category === `Entertainment`
	);
	let entertainmentTotal = entertainment.length;
	document.getElementById(`3.4.1`).innerHTML =
		`There were ` + entertainmentTotal + ` entertainment transactions`;
	let groceryTotal = grocery.length;
	document.getElementById(`3.4`).innerHTML =
		`There were ` + groceryTotal + ` grocery transactions`;
	let travel = user.transactionsMonthToDate.filter(
		(e) => e.category === `Travel`
	);
	let travelTotal = travel.length;
	document.getElementById(`3.4.2`).innerHTML =
		`There were ` + travelTotal + ` travel transactions`;
}
sortCats();
