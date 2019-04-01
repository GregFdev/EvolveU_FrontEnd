// let arrayInput = document.getElementById("arrayInput");
// let buttons = document.getElementById("buttons");
// let msg = document.getElementById("messageArea");
let arr1 = [];

buttons.addEventListener("click", onPushBtn);

function onPushBtn(e) { 
	let oper = e.target.textContent;
	console.log("button pressed is = ", oper);

	// note that empty string gives isNaN === "false"
	if (arrayInput.value === "" || (isNaN(arrayInput.value))) {
		msg.textContent = "You must enter a number";
		// console.log("NaN");

	} else if (oper === "Add") {
		arr1.push(arrayInput.value);
		console.log("new array = ", arr1);
		msg.textContent = "Your number was added to the array";
	};

	if (oper === "Show") {
		console.log("current array = ", arr1);
		msg.textContent = "Current array is " + arr1; 

	}; 

	if (oper === "Total") {
		// console.log("length = ", arr1.length);
		arr1Sum = 0;

		for (let val of arr1) {
			arr1Sum += Number(val);
			// console.log("value = ", val, "arr sum = ", arr1Sum);
		}

		msg.textContent = "The total sum of all elements is " + arr1Sum;

	} 

	if (oper === "Clear"){
		console.log(oper);
		arr1.length = 0; //clear the array (can't just redefine it)
		msg.textContent = "Array cleared!";

	}
};
	


 
	

	












