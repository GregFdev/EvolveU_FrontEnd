/*	
	Write the function to format an email based on an object / map
*/
// const assertEquals = require('./AssertEquals.js');

// Write the function after this comment ---
makeEmailObj = (obj) => {
	// console.log(obj);
	return (`${obj.fname}.${obj.lname}@evolveu.ca`
		);
}
// and before this comment ---

// const objLarry = {fname:'larry', lname:'shumlich'};
// assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
// assertEquals('bill.smith@evolveu.com', makeEmailObj({fname:'bill',lname:'smith'}));
// assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));

module.exports = makeEmailObj;