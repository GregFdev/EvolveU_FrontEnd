

// assign input buttons to variables - NOTE: only assign variable to
// whole element, not just value as value will not be passed to function.



var inp1 = document.getElementById("inputnumber1");
var inp2 = document.getElementById("inputnumber2");

// get element ops buttons which is all four buttons
var btndiv = document.getElementById("opsbtns");
// add listener to whole div
btndiv.addEventListener("click", fndiv);

// function fndiv is passed event details from listener into xy
function fndiv(xy) { 
	
	if(inp1.value !== "" && inp2.value !== "") {
	
		// target is an object returned in xy from which we can grab texContent
		let oper = xy.target.textContent;

		// console.log(oper);
	
	
		
		if(oper === "/") {
			ans_out(inp1.value / inp2.value);

		}
		if(oper === "*") {
			ans_out(inp1.value * inp2.value);

		};

		if(oper === "-") {
			ans_out(inp1.value - inp2.value);

		};

		if(oper === "+") {
			ans_out(Number(inp1.value) + Number(inp2.value));
		};
	};

};

function ans_out(ans) {
	document.getElementById("answer").textContent = "The Answer is " + ans;
};

