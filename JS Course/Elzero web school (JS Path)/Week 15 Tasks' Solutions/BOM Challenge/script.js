"use strict"

let add = document.querySelector("input[type='submit']");
let taskField = document.querySelector('input[type="text"]');
let tasks = document.querySelector('.task-list');

if(localStorage.getItem('counter') === null) {
  localStorage.setItem('counter', 1);
}

if(localStorage.getItem('tasks') === null) {
  localStorage.setItem('tasks', JSON.stringify({}));
} else {
  let savedTasks = JSON.parse(localStorage.tasks);
  for(let taskID of Object.keys(savedTasks)) {
    createTask(savedTasks[taskID], taskID);
  }
}

function createTask(taskContent, id=null) {
  if(taskContent === "") return;
  let taskContainer = document.createElement('div');
  let taskID = document.createElement('span');
  let addedTask = document.createTextNode(taskContent);
  let deleteButton = document.createElement('button');

  taskContainer.classList.add('task-container');

  if(id === null) {
    taskID.innerText = localStorage.counter++;
  } else {
    taskID.innerText = id;
  }
  taskID.style.display = "none";

  deleteButton.innerText = "Delete";
  deleteButton.classList.add('delete-task');
  deleteButton.addEventListener('click', _ => {
    taskContainer.remove();
    let savedTasks = JSON.parse(localStorage.tasks);
    delete savedTasks[taskID.innerText];
    localStorage.tasks = JSON.stringify(savedTasks);
  });

  taskContainer.appendChild(taskID);
  taskContainer.appendChild(addedTask);
  taskContainer.appendChild(deleteButton);
  tasks.appendChild(taskContainer);
  if(id === null) {
    let savedTasks = JSON.parse(localStorage.tasks);
    savedTasks[taskID.innerText] = taskContent;
    localStorage.tasks = JSON.stringify(savedTasks);
  }
}

add.onclick = function(event) {
  event.preventDefault();
  createTask(taskField.value);
  taskField.value = "";
};