const order = {
	orderItems: [
		{
			id: 'M40',
			item: 'T-shirt',
			price: 29.9,
			quantity: 5,
			gender: 'm',
			category: 'Summer',
		},
		{
			id: 'M32',
			item: 'Hoodie',
			price: 99.9,
			quantity: 2,
			gender: 'm',
			category: 'Winter',
		},
		{
			id: 'M11',
			item: 'Sandals',
			price: 19.9,
			quantity: 1,
			gender: 'm',
			category: 'Summer',
		},
		{
			id: 'M12',
			item: 'Shorts',
			price: 29.9,
			quantity: 1,
			gender: 'm',
			category: 'Summer',
		},
		{
			id: 'M13',
			item: 'Exercise Shorts',
			price: 29.9,
			quantity: 5,
			gender: 'm',
			category: 'Exercise',
		},
		{
			id: 'M41',
			item: 'Shoes',
			price: 19.9,
			quantity: 1,
			gender: 'm',
			category: 'Summer',
		},
		{
			id: 'M49',
			item: 'Socks',
			price: 5.9,
			quantity: 10,
			gender: 'm',
			category: 'Undergarment',
		},
		{
			id: 'M01',
			item: 'Belt',
			price: 15.9,
			quantity: 1,
			gender: 'm',
			category: 'Accessory',
		},
		{
			id: 'M42',
			item: 'Underwear',
			price: 19.9,
			quantity: 10,
			gender: 'm',
			category: 'Undergarment',
		},
		{
			id: 'F71',
			item: 'T-shirt',
			price: 39.9,
			quantity: 5,
			gender: 'f',
			category: 'Summer',
		},
		{
			id: 'F81',
			item: 'Dress',
			price: 49.9,
			quantity: 5,
			gender: 'f',
			category: 'Summer',
		},
		{
			id: 'F91',
			item: 'Skirt',
			price: 39.9,
			quantity: 5,
			gender: 'f',
			category: 'Summer',
		},
		{
			id: 'F01',
			item: 'Shoes',
			price: 19.9,
			quantity: 10,
			gender: 'f',
			category: 'Summer',
		},
		{
			id: 'F32',
			item: 'Hoodie',
			price: 99.9,
			quantity: 2,
			gender: 'f',
			category: 'Winter',
		},
		{
			id: 'F34',
			item: 'Sandals',
			price: 19.9,
			quantity: 2,
			gender: 'f',
			category: 'Summer',
		},
		{
			id: 'F36',
			item: 'Shorts',
			price: 39.9,
			quantity: 3,
			gender: 'f',
			category: 'Summer',
		},
		{
			id: 'F12',
			item: 'Exercise Shorts',
			price: 29.9,
			quantity: 5,
			gender: 'f',
			category: 'Exercise',
		},
		{
			id: 'F19',
			item: 'Sleeping',
			price: 39.9,
			quantity: 3,
			gender: 'f',
			category: 'Undergarment',
		},
		{
			id: 'F42',
			item: 'Socks',
			price: 5.9,
			quantity: 10,
			gender: 'f',
			category: 'Undergarment',
		},
		{
			id: 'F43',
			item: 'Underwear',
			price: 39.9,
			quantity: 10,
			gender: 'f',
			category: 'Undergarment',
		},
		{
			id: 'F44',
			item: 'Bra',
			price: 29.9,
			quantity: 10,
			gender: 'f',
			category: 'Undergarment',
		},
		{
			id: 'F01',
			item: 'Belt',
			price: 15.9,
			quantity: 1,
			gender: 'f',
			category: 'Accessory',
		},
	],
};

function totalOrders() {
	let total = order.orderItems.length;
	console.log(`The Total number of orders are ` + total);

	document.getElementById(`3.5`).innerHTML =
		`The Total number of orders are ` + total;
}
totalOrders();

function gender() {
	let maleUser = order.orderItems.filter((item) => item.gender === 'm');
	let y = maleUser.length;
	// console.log(maleUser);
	let femaleUser = order.orderItems.filter((item) => item.gender === 'f');
	let x = femaleUser.length;
	console.log(femaleUser);
	console.log(
		`There are ` + y + ` male orders & there are ` + x + ` female orders.`
	);
	document.getElementById(`3.6`).innerHTML =
		'There are ' + y + ' male orders & there are ' + x + ' female orders.';
}
gender();

function season() {
	let summer = order.orderItems.filter((item) => item.category === `Summer`);
	let num = summer.length;
	console.log(`There are ` + num + ` summer items in the order`);
	document.getElementById(`3.6.1`).innerHTML =
		`There are ` + num + ` summer items in the order`;
}

season();

function underwear() {
	let men = order.orderItems.filter((item) => item.category === `Undergarment`);
	let num = men.length;
	let women = order.orderItems.filter(
		(item) => item.category === `Female Undergarment`
	);
	let num2 = women.length;
	console.log(
		`There are ` +
			num +
			` mens underwear on order & there are ` +
			num2 +
			` womens underwear on order`
	);
	document.getElementById(`3.6.2`).innerHTML =
		`There are ` +
		num +
		` mens underwear on order & there are ` +
		num2 +
		` womens underwear on order`;
}
underwear();

order.orderItems.originalDate = `july`;
order.orderItems.delivered = false;

function totalPrice(a) {
	let total = order.orderItems[`price`];
	for (let total in a) {
		total += a[total];
	}
	return total;
}

totalPrice();
