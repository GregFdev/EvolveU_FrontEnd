const assertEquals = require('./AssertEquals.js');
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

let largeBalances = data.staff.filter(items => 
	items.balance >= 1000)
console.log(largeBalances);
assertEquals(largeBalances[0].fname, "Liam");
assertEquals(largeBalances[1].fname, "Emma");

// Mar 29 practice$


let tot = data.staff.reduce((cumBal, items) => {
	console.log('cumBal ', cumBal, 'item', items);
	return cumBal + items.balance;
	},0)

console.log(tot);

assertEquals(tot, 3823);

// Mar 29 extra practice with map

let newArray = data.staff.map(items => 
	items.fname + 'hello');

console.log(newArray[0]);