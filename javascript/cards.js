idBtnAddCard.addEventListener("click", onAddCard);
let currCount = 0;

function newCard(i) {
	// add new div and its children buttons
	let newLine = "\r\n";  // note must have white-space: pre in css
							// for break to work

	let newCardDiv = document.createElement("div");
	newCardDiv.className = "cards";
	newCardDiv.id = "idNewCard" + i;
	newCardDiv.textContent = `Card ${i}
		${newLine}		hello`;
		
	// button addbefore
	let btnAddBefore = document.createElement("button");
	btnAddBefore.textContent = "Add Before";
	btnAddBefore.className = "buttons";
	btnAddBefore.addEventListener("click", onAddBefore);
	
	// button addafter
	let btnAddAfter = document.createElement("button");
	btnAddAfter.textContent = "Add After";
	btnAddAfter.className = "buttons";
	btnAddAfter.addEventListener("click", onAddAfter);

	// button delete
	let btnDelete = document.createElement("button");
	btnDelete.textContent = "Delete";
	btnDelete.className = "buttons";
	btnDelete.addEventListener("click", onDelete);

	// add buttons to new div
	newCardDiv.appendChild(btnAddBefore);
	newCardDiv.appendChild(btnAddAfter);
	newCardDiv.appendChild(btnDelete);

	// return the entire new div object including all children
	return newCardDiv;
};

function onAddCard() { // add to end of whole list
	currCount ++;
	let card = newCard(currCount);
	blockLeft.appendChild(card);

	
};

function onAddBefore(e) {
	currCount ++;
	// get parentNode (card) of button pressed 
	let prevCard = e.target.parentNode;
	let parentDiv = prevCard.parentNode;
	let nextCard = newCard(currCount);
	// insert before prevCard
	parentDiv.insertBefore(nextCard, prevCard);


};

function onAddAfter(e) {
	currCount ++;
	// get parentNode (card) of button pressed 
	let prevCard = e.target.parentNode;
	let parentDiv = prevCard.parentNode;
	let nextCard = newCard(currCount);
	// insert before next sibling of prevCard
	parentDiv.insertBefore(nextCard, prevCard.nextSibling);

	// USED ---  element.parentNode.insertBefore(newElement, element.nextSibling);

};

function onDelete(e) {
	// get parentNode (card) of button pressed 
	let prevCard = e.target.parentNode;
	prevCard.remove();

};









