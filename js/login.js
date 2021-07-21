const nameInput = document.querySelector("#login");
const username = document.querySelector("#input-name");
const welcome = document.querySelector("#user");
const monthly = document.querySelector("#monthly");
const link = document.querySelector("#floatingLink");
const todo = document.querySelector("#floatingTodo");

const USER_KEY = "user";
const HIDDEN_CLASS = "hidden";

function handleNameSubmit(event) {
    event.preventDefault();
    localStorage.setItem(USER_KEY, username.value);
    typingUsername(username.value);
    nameInput.classList.add(HIDDEN_CLASS);
}

function typingUsername(n) {
    welcome.innerText = `안녕하세요 ${n} 님!`;
    welcome.classList.remove(HIDDEN_CLASS);
    monthly.classList.remove(HIDDEN_CLASS);
    link.classList.remove(HIDDEN_CLASS);
    todo.classList.remove(HIDDEN_CLASS);
}

if (localStorage.getItem(USER_KEY) !== null) {
    typingUsername(localStorage.getItem(USER_KEY));
    welcome.classList.remove(HIDDEN_CLASS);
    monthly.classList.remove(HIDDEN_CLASS);
    link.classList.remove(HIDDEN_CLASS);
    todo.classList.remove(HIDDEN_CLASS);
}
else {
    nameInput.addEventListener("submit", handleNameSubmit);
    nameInput.classList.remove(HIDDEN_CLASS);
}