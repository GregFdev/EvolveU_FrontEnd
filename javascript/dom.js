// var para = document.createElement("p");
// var node = document.createTextNode("This is new.");



// para.appendChild(node);
// console.log(para);

// var element = document.getElementById("div1");
// var child = document.getElementById("p1");
// element.insertBefore(para, child);



// div2.addEventListener("click", onDivClick);
idBtnShow.addEventListener("click", onShowClick);
idBtnAdd.addEventListener("click", onAddClick);



function onDivClick(e) {
	// console.log(e);

}

function onShowClick(e) {
	// console.log(e);
	let c = idOrdList.children;
	console.log(c);

}

function onAddClick() {
	// console.log(e);
	let newListItem = document.createElement("li");
	newListItem.textContent = "Item 4";

	let listTopItem = document.getElementById("idLi1");
	let existList  = document.getElementById("idOrdList");
	existList.insertBefore(newListItem, listTopItem);


	console.log(existList);

	}