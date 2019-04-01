const assertEquals = require('./AssertEquals.js');
const makeEmailObj = require('./MakeEmailObj.js');

const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};

const table = [{name: 'Greg', age: 46}, {name: 'Julia', age: 12}, {name: 'Natalie', age: 10}]

// Write the function after this comment ---


// const totalBalance = (arrayStaff) => {
	
// 	let runSum = 0;
// 	arrayStaff.forEach(items => {
// 		console.log('balance is ', Number(items.balance));
// 		runSum += Number(items.balance);
// 		console.log('running sum is ', runSum);
// 		});

// 	return (runSum);
// }

// const totalBalance = data.staff.reduce((cumBal, items) => {
// 	console.log(cumBal);
// 	return cumBal + items.balance;
// }, 0);

// console.log('total balance is = ', totalBalance);

const totalAge = table.reduce((cumAge, items) => {
	// console.log(cumAge);
	return cumAge + items.age;
}, 0);

console.log('total balance is = ', totalAge);

const avgAge = table.reduce((cumAge, items) => {
	// console.log(cumAge);
	return ((cumAge + items.age) / len(items)) ;
}, 0);

console.log('average age is = ', avgAge);
