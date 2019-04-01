const p = console.log;


function onBtnPushed() {
	p("state on button push = ", idH1.textContent);

	if (idH1.textContent === "Hello World") {
		p("in IF current state is ", idH1.textContent);
		idH1.textContent = "Hello Universe";
	 	p("in IF next state = ", idH1.textContent);

	} else {
		idH1.textContent = "Hello World";
	}
	// else {
	// 	p(idH1.textContent);
	// 	idH1.textContent = "Hello World";
	
	// }

};

idBtnPush.addEventListener("click", onBtnPushed);
idH1.addEventListener("mouseover", onBtnPushed);



