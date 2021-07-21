const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const completeList = document.getElementById("complete-list");
const TODOS_KEY = "todos";
const COMPLETE_KEY = "complete";

let toDos = [];
let completeToDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function saveComplete() {
  localStorage.setItem(COMPLETE_KEY, JSON.stringify(completeToDos));
}

function completeToDo(event) {
  const li = event.target.parentElement;
  const complete = document.createElement("li");
  complete.id = li.id;
  const span = document.createElement("span");
  let i = 0;
  for (let j = 0; j < toDos.length; j++) {
    if (parseInt(toDos[j]["id"]) === parseInt(li.id)) {
      i = j; 
    }
  }
  span.innerText = toDos[i]["text"];
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteToDo);
  complete.appendChild(span);
  complete.appendChild(deleteButton);
  completeList.appendChild(complete);
  deleteToDo(event);
  completeToDos.push({"text": span.innerText, id: li.id});
  saveComplete();
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function deleteComplete(event) {
  const li = event.target.parentElement;
  li.remove();
  completeToDos = completeToDos.filter((complete) => parseInt(complete.id) !== parseInt(li.id));
  saveComplete();
}

const newComplete = {"text": "", "id": 0};

function paintComplete(newComplete) {
  const li = document.createElement("li");
  li.id = newComplete.id;
  const span = document.createElement("span");
  span.innerText = newComplete["text"];
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteComplete);
  li.appendChild(span);
  li.appendChild(deleteButton);
  completeList.appendChild(li);
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const completeButton = document.createElement("button");
  completeButton.innerText = "✔️";
  completeButton.addEventListener("click", completeToDo);
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
const savedComplete = localStorage.getItem(COMPLETE_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

if (savedComplete !== null) {
  const parsedComplete = JSON.parse(savedComplete);
  completeToDos = parsedComplete;
  parsedComplete.forEach(paintComplete);
}
