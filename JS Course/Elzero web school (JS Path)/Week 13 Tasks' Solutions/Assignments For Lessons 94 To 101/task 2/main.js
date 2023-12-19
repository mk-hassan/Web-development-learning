"use strict"

let addingField = document.getElementsByClassName("classes-to-add")[0];
let removingField = document.getElementsByClassName("classes-to-remove")[0];
let currentElement = document.querySelector(".element.current");
let classShowList = document.querySelector(".classes-list div");

let noClassesIndicator = document.createTextNode("No Classes To Show");

window.onload = function() {
	let classes = currentElement.classList;
	for(let i = 0; i < classes.length; ++i) {
		showNewClass(classes[i]);
	}
};

function findClassPlace(newClassName) {
	let children = classShowList.children;

	let left = 0, right = children.length;
	while(left < right) {
		let mid = Math.floor((left + right) / 2);
		if(children[mid].innerText > newClassName) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
	return right - 1;
}

function showNewClass(newClassName) {
	let span = document.createElement("span");
	span.innerText = newClassName;

	let right = findClassPlace(newClassName);
	if(right === -1) {
		classShowList.prepend(span);
	} else {
		classShowList.children[right].after(span);
	}
}

addingField.onblur = function() {
	let newClasses = this.value.trim().toLowerCase().split(' ');
	this.value = "";
	for(let i = 0; i < newClasses.length; ++i) {
		if(newClasses[i] === "") continue;
		if(!currentElement.classList.contains(newClasses[i])) {
			currentElement.classList.add(newClasses[i]);
			showNewClass(newClasses[i]);
		}
	}
	if(currentElement.classList.length !== 0) {
		noClassesIndicator.remove();
	}
};

removingField.onblur = function() {
	let removedClasses = this.value.trim().toLowerCase().split(' ');
	this.value = "";
	for(let i = 0; i < removedClasses.length; ++i) {
		if(removedClasses[i] === "") continue;
		if(currentElement.classList.contains(removedClasses[i])) {
			currentElement.classList.remove(removedClasses[i]);
			classShowList.children[findClassPlace(removedClasses[i])].remove();
		}
		if(currentElement.classList.length === 0) {
			classShowList.append(noClassesIndicator);
		}
	}
};