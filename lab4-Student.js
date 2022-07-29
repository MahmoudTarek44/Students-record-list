var searchButton = document.getElementById("search");
var addButton = document.getElementById("add");
var container = document.getElementById("names");
var input = document.getElementById("input");
var searchArea = [];

addButton.onclick = function addName() {
	var newName = prompt("Add a new name");
	if (newName != "" && newName != null) {
		var element = document.createElement("div");
		element.setAttribute("class", "element");

		var parag = document.createElement("p");
		parag.setAttribute("class", "string");
		parag.textContent = newName;
		console.log(parag);

		var remove = document.createElement("button");
		remove.setAttribute("class", "delete");
		remove.textContent = "x";
		console.log(remove);

		element.append(parag);
		element.append(remove);
		container.appendChild(element);

		searchArea.push(newName);

		remove.onclick = function removeItem() {
			remove.parentElement.remove();
		};
	} else if (newName == "") {
		alert("Please enter a name");
	} else {
		return;
	}
	// console.log(searchArea);
};
searchButton.onclick = function searchName() {
	var selected = document.querySelectorAll(".string");
	var val = input.value;
	if (val != "") {
		for (select of selected) {
			var text = select.innerText;

			if (text == val) {
				select.parentElement.style.display = "flex";
			} else {
				select.parentElement.style.display = "none";
			}
		}
		var result = searchArea.filter(function (e) {
			return e == val;
		});
		if (result.length == 0) {
			alert("Name not found");
		}
	} else {
		for (select of selected) {
			select.parentElement.style.display = "flex";
		}
	}
};
