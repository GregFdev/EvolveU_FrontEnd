const data = 
	{clients:
		[
			{name:"Larry", balance:10},
			{name:"Liam", balance:1000},
			{name:"Emma", balance:1330},
			{name:"Olivia", balance:310},
			{name:"Noah", balance:503},
			{name:"William", balance:520},
			{name:"Benjamin", balance:150},
		]
	};




// draw firtst list

drawClients(data);


function drawClients(arrData) {
	let arrClients = arrData.clients;
	let i = 0;

	while (i < arrClients.length) {

		// console.log(data.clients[i].balance, i);
		let userName = data.clients[i].name;
		let userBalance = data.clients[i].balance;
		let card = newCard(i, userName, userBalance);
		blockLeft.appendChild(card);
		i++

	}
}



let currCount = 0;

function newCard(i, name, balance) {
	// add new div and its children buttons
	let newLine = "\r\n";  // note must have white-space: pre in css
							// for break to work

	let newCardDiv = document.createElement("div");
	newCardDiv.className = "cards";
	newCardDiv.id = i;
	newCardDiv.name = name;
	// console.log(newCardDiv.id);
	
	let lineBreak = document.createElement("p");
	lineBreak.textContent = newLine;

	// create name and balance
	let userName = document.createElement("span");
	userName.textContent = name;
	userName.className = "names";
	userName.id = "idUser";

	// create name and balance
	let userBalance = document.createElement("span");
	userBalance.textContent = balance;
	userBalance.className = "names";
	userBalance.id = "idBalance";

	// button delete
	let btnDelete = document.createElement("button");
	btnDelete.textContent = "Delete";
	btnDelete.className = "buttons";
	btnDelete.addEventListener("click", onDelete);

	// add components and buttons to new div
	newCardDiv.appendChild(userName);
	newCardDiv.appendChild(userBalance);
	newCardDiv.appendChild(lineBreak);

	newCardDiv.appendChild(btnDelete);

	// return the entire new div object including all children
	return newCardDiv;
};

function getName(element) {
	return data.clients[element].name;
}

function onDelete(e) {
	// get parentNode (card) of button pressed 
	let prevCard = e.target.parentNode;
	let cardDiv = prevCard.parentNode;
	// console.log("parent of card is ", cardDiv);
	// console.log("card to be deleted is ", prevCard.id);
	// console.log("card user is ", getName(prevCard.id));

	data.clients.splice(prevCard.id,1);

	
	while (cardDiv.firstChild) {
    	cardDiv.removeChild(cardDiv.firstChild);
	}

	drawClients(data);

	// console.log(data.clients);
	


};


