const assertEquals = require('./AssertEquals.js');
const makeEmailObj = require('./MakeEmailObj.js');

const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};

// Write the function after this comment ---

	
const loopStaff = (arrayStaff) => {
	const emailArray = arrayStaff.map(item => makeEmailObj(item));
	// console.log(emailArray);
	return (emailArray)
	};
	
const loopWithForOf = (arrayStaff) => {
	let email = []
	for (let item of arrayStaff) {;
		// console.log(item);
		email.push(makeEmailObj(item));
	}
	return (email);
}

const loopWithForIn = (arrayStaff) => {
	let email = []
	for (let item of arrayStaff) {;
		console.log(item);
		email.push(makeEmailObj(item));
	}
	return (email);
}

const loopWithEach = (arrayStaff) => {
	let email = [];
	arrayStaff.forEach(items => email.push(makeEmailObj(items)));
	// console.log(email);
	return (email);
}


const loopWithMap = (arrayStaff) => {
	const email = arrayStaff.map(items => makeEmailObj(items));
	console.log(email);
	return (email);
}




console.log('-----emailWithEach')
const emailWithEach = loopWithEach(data.staff);

// console.log(emailWithEach);

assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);

// console.log('-----emailWithMap')

const emailWithMap = loopWithMap(data.staff);

// // console.log(emailWithMap);

assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);
