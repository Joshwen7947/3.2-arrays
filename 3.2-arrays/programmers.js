const programmers = [
	'Dennis Ritchie',
	'Brian Kernighan',
	'Ken Thompson',
	'Linus Torvalds',
	'Bjarne Stroustrup',
	'Tim Berners-Lee',
	'Donald Knuth',
	'Alan Turing',
	'Mark Zuckerberg',
	'Bill Gates',
	'Larry Page',
	'Elon Musk',
	'Jack Dorsey',
	'Satoshi Nakamoto',
	'Ada Lovelace',
	'Grace Hopper',
	'Dan Ambramov',
	'Jordan Walke',
	'Ryan Dahl',
	'David Heinemeier Hansson',
	'Guido van Rossum',
	'Yukihiro Matsumoto',
	'Sergey Brin',
	'Lyndsey Scott',
	'Abhinav Asthana',
	'Abhijit Kane',
	'Ankit Sobti',
	'Loi Tran',
	'Charles Lee',
	'Tuan Nguyen',
	'Tan Vo',
];
// for (let i = 0; i < programmers.length; i++) {
// 	const programmer = programmers[i];
// 	console.log(programmer);
// }

function firstName() {
	function printFirstName(e) {
		console.log(`first Name:`, e);
		return e.split(` `)[0];
	}
	const newProgrammers = programmers.map(printFirstName);

	document.getElementById(`3.1`).innerHTML = newProgrammers.join(` `);
}
firstName();

function lastName() {
	function printLastName(e) {
		console.log(`Last Name: `, e);
		return e.split(` `)[1];
	}
	const newProgrammersLastName = programmers.map(printLastName);
	document.getElementById(`3.2`).innerHTML = newProgrammersLastName.join(` `);
}
lastName();

const filterL = programmers.filter((bar) => bar.split(``).includes(`L`));
console.log(filterL);
const filterT = programmers.filter((bar) => bar.split(``).includes(`T`));
console.log(filterT);

// const lessThanFour = programmers.filter((bar) => function(){
// 	if(bar.length < 4){
// 		console.log(bar);
// 	}
// }
// };
// console.log(lessThanFour);
