const assertEquals = require('./AssertEquals.js');
// console.log(assertEquals);

// assertEquals = (p1, p2) => {
// 	if (p1 === p2) {
// 		return true;

// 	} else {
// 		console.log(`***the two values are not the same:
// 			p1 ---> ${p1}
// 			p2 ---> ${p2}
// 		`);
		
// 		return false;

// 	}

	
// };

/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---
makeEmailArr = (arr) => {
	// console.log(arr);
	return (
		`${arr[0]}.${arr[1]}@evolveu.ca`
	)
}
// and before this comment ---

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));
