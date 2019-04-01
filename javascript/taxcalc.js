// js to calc canadian federal tax

let grossInc = document.getElementById("grossIncome");
let fedTax = document.getElementById("fedTax");
let effTax = document.getElementById("effTax");
let btnCalc = document.getElementById("btnCalc");

let bracket = [0, 47630, 95259, 147667, 210371];

let rates = [0, 0.15 ,0.205, 0.26, 0.29, 0.33];

function calcTax(x) {
	let n;

	if(x <= bracket[1]) {
		let n = 1;
		fedTax.value = fullBrackets(n) + currentBracket(x, n);

	} else if(x <= bracket[2]) {		
		let n = 2;
		fedTax.value = fullBrackets(n) + currentBracket(x, n);

	} else if(x <= bracket[3]) {		
		let n = 3;
		fedTax.value = fullBrackets(n) + currentBracket(x, n);

	} else if(x <= bracket[4]) {		
		let n = 4;
		fedTax.value = fullBrackets(n) + currentBracket(x, n);

	} else {
		let n = 5;
		fedTax.value = fullBrackets(n) + currentBracket(x, n);

	}

	effTax.value = fedTax.value * 100 / x;
};

function btnEvent() {
	calcTax(grossInc.value);
};

function currentBracket(x, n) {
	return (x - bracket[n-1]) * rates[n];
};

function fullBrackets(n) {
	// console.log("fullbrackets n =" + n);
	let i;
	let totFullBrackets = 0;
	for (i = n; i > 1; i--) {
		totFullBrackets += (bracket[i-1] - bracket[i-2]) * rates[i-1];

		// console.log("loop = " + i, bracket[i-1], bracket[i-2], rates[i-1], totFullBrackets);	
	};

	return totFullBrackets;
};


btnCalc.addEventListener("click", btnEvent);

