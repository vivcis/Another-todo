const todos = [
	{
		id: 1,
		content: "sample todo",
		createdDate: getDate(),
	},
];

function getDate() {
	//gives us the date in a format we like
	return new Date().toDateString() + " " + new Date().toLocaleTimeString();
}


const todoList = document.querySelector(".todos");
const addBtn = document.querySelector(".createTask");
const input = document.querySelector("#createTodoField");

function loadTodos() {
	let allTodos = "";

	todos.map((todo) => {
		allTodos += `<div class="todo" id=${todo.id}>
      <p class="content">${todo.content}</p>
      <p class="date">${todo.createdDate}</p>
      </div>
    `;
	});

	todoList.innerHTML = allTodos;
}

function addTodo(e) {
	e.preventDefault();
	const content = input.value;

	if (!content) {
		alert("Input cannot be empty");
		return;
	}

	todos.push({
		id: todos[todos.length - 1].id + 1,
		content,
		createdDate: getDate(),
	});

	loadTodos();
	input.value = "";
}

window.addEventListener("load", loadTodos);
addBtn.addEventListener("click", addTodo);