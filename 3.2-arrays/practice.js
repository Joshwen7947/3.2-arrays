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

programmers.map((e) => console.log(typeof e));

// map - returns something new
const bar = programmers.map((foo) => foo.split(` `)[0]);

// filter
const filter = programmers.filter((bar) => bar.split(` `)[0] === `Bill`);
console.log(filter);

const filterLetter = programmers.filter((bar) => bar.split(``).includes(`E`));
console.log(filterLetter);

// sort
const go = programmers.sort(
	(a, b) => a.split(` `)[0].length - b.split(` `)[0].length
);
console.log({ foo: programmers });

// reduce
const buzz = programmers.reduce((foo, currentValue) => {
	if (currentValue) {
		return (currentValue.split(` `)[0].length += foo);
	}
	return 0;
}, 0);
console.log(buzz);

// concat

const newProgrammers = [`josh`, `bob`, `brad`];

const allProgrammers = newProgrammers.concat(programmers);
// console.log(allProgrammers);

const nameLength = programmers.reduce((foo, currentValue) => {
	if (currentValue) {
		return (currentValue.split(` `)[0].length += foo);
	}
	return 0;
}, 0);
console.log(nameLength);

console.log(programmers.length);
