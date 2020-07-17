const elements = [];
const ul = document.getElementById("list-elements");
const ul2 = document.getElementById("list-elements-2");

function addElement() {
	const element = document.getElementById("element").value;

	console.log("No es un numero: ", isNaN(element));

	if(isNaN(element)) {
		alert("Debe ingresar un número");
	} else {		
		elements.push(parseInt(element));
	}
	
	console.log(elements);
}

function showList() {
	// ul.innerHTML = "";
	// elements.forEach(function(element) {
	// 	let li = document.createElement("LI");
	// 	li.innerHTML = "<span>" + element + "</span>";
	// 	ul.appendChild(li);
	// });

	let lis = "";
	elements.forEach(function(element) {
		lis += "<li>" + element + "</li>";
	});

	console.log(parseInt(lis));

	ul.innerHTML = lis;
}


function showSum() {
	let sum = 0;

	elements.forEach(function(element) {
		sum += element;
	});

	const display = document.createElement('P');
	display.innerHTML = sum;

	const displaySum = document.getElementById("sum");
	displaySum.innerHTML = "";
	document.getElementById("sum").appendChild(display);
	// document.body.appendChild(display);

}








