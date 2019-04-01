/*

	--- functions and braces nightmare 

*/
console.log("Hello from exercises");

const array1 = [3,1];

// write the function that will make this work


function orderArray(arr) {
	let x = arr[0];
	let y = arr[1];
	console.log(x, y)
	let newArr = [];
	if (x > y) {
		console.log("x bigger");
		newArr = [y, x];
	} else {
		console.log('y bigger');
		newArr = [x, y];
	}
	console.log(newArr);
	return newArr;
}


console.log("Should Be: 1, 3:", 
	orderArray(array1));

console.log("Should Be: 1, 5:", 
	orderArray([1, 5]));


console.log("Should Be: 10, 20:", 
	orderArray([20, 10]));
