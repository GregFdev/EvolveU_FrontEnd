// js to calc canadian federal tax

let grossInc = document.getElementById("grossIncome");
let fedTax = document.getElementById("fedTax");
let effTax = document.getElementById("effTax");
let btnCalc = document.getElementById("btnCalc");

let bracket = [0, 47630, 95259, 147667, 210371];
let rates = [0, 0.15 ,0.205, 0.26, 0.29, 0.33];

btnCalc.addEventListener("click", btnEvent);

// use a do while loop in function to loop through
// index values one at a time and if the bracket is found
// just apply that index to the arrays in the return

function calcTax(income) {
	let n = 1;

	do {
		if(income <= bracket[n]) { 
			break;

		} else {n++};
	}
	while (n < 5);
	
	return fullBrackets(n) + currentBracket(income, n);

};

// display results upon button press
function btnEvent() {
	fedTax.value = calcTax(grossInc.value);
	effTax.value = fedTax.value * 100 / grossInc.value;

};

// calc tax payable in current bracket only
function currentBracket(x, n) {
	return (x - bracket[n-1]) * rates[n];
};

// calc tax payable in all lower brackets
function fullBrackets(n) { 
	
	let totFullBrackets = 0;
	for (i = n; i > 1; i--) {
		totFullBrackets += (bracket[i-1] - bracket[i-2]) * rates[i-1];
	};

	return totFullBrackets;
};


