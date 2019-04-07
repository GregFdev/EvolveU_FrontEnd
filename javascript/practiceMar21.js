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

const ageTable = [{name: 'Greg', age: 46}, {name: 'Julia', age: 12}, {name: 'Natalie', age: 10}]
console.log(ageTable.length);
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

// const totalBalance = data.staff.reduce((cumBal, items) => 
// 	cumBal + items.balance, 0);


// console.log('total balance is = ', totalBalance);

// const totalAge = ageTable.reduce((cumAge, items) => 
// 	cumAge + items.age, 0)

// console.log('total age is = ', totalAge);
const ageLength = ageTable.length;
const avgAge = ageTable.reduce((cumAge, items) => 
	(cumAge + items.age) / ageLength, 0);


console.log('average age is = ', avgAge);
