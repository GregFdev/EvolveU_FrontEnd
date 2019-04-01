let l = console.log;

let prov = {ab:"Alberta", sk:"Saskatchewan", mb:"Manitoba"};

function onLookup() {
	
	l(prov[idInpProvCode.value]);
	dictMsg.textContent = prov[idInpProvCode.value];
};	

idBtnLookup.addEventListener("click", onLookup);

