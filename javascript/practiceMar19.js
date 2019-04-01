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
	for (let item in arrayStaff) {;
		console.log(arrayStaff[item]);
		email.push(makeEmailObj(arrayStaff[item]));
	}
	return (email);
}

// console.log('-----emailForOf')

// const emailForOf = loopWithForOf(data.staff);

// // console.log(emailForOf);
// assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
// assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
// assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

console.log('-----emailForIn')

const emailForIn = loopWithForIn(data.staff);

// console.log(emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);