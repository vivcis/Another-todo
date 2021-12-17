function getDate() {
	//gives us the date in a format we like
	return new Date().toDateString() + " " + new Date().toLocaleTimeString();
}


let store = localStorage.getItem('todos');
if(!store) {
	localStorage.setItem('todos', JSON.stringify([]));
}

//once the webpage loads, we want to render all the todos in our todoArray
window.addEventListener('load', () => {
	const todosFromStorage = localStorage.getItem('todos');
	const todos = JSON.parse(todosFromStorage);
	for (let obj of todos) {
		createTodo(obj.content);
	}
})


//select existing div in html
const todoParent = document.querySelector('.todos');


function createTodo(content) {
	const todosFromStorage = localStorage.getItem('todos');
	const todos = JSON.parse(todosFromStorage);

	todos.push({ content: content });
	localStorage.setItem('todos', JSON.stringify(todos));

	//create an empty div
	const todo = document.createElement('div');
	//give that div a class of todo
	todo.setAttribute('class', 'todo');

	//create an empty paragraph
	const contentParagraph = document.createElement('p');
	//give the paragraph a class of content
	contentParagraph.setAttribute('class', 'content')
	//put the content from the object inside the paragraph
	contentParagraph.innerText = content;

	//create another empty paragraph
	const dateParagraph = document.createElement('p');
	//give the paragraph a class of date
	dateParagraph.setAttribute('class', 'date')
	//put the value coming from getDate function inside the paragraph
	dateParagraph.innerText = getDate();

	//add the 2 paragraphs created to the div we created
	todo.appendChild(contentParagraph);
	todo.appendChild(dateParagraph);

	//add todo we created to existing element with class of todos 
	todoParent.appendChild(todo);
}

const addBtn = document.querySelector('.createTask');
const inputField = document.querySelector('#createTodoField');

addBtn.addEventListener('click', (e) => {
	//prevent the page from reloading
	//default behaviour of buttons is to reload page when clicked
	//and we dont want that
	e.preventDefault();

	//if inputfield is empty
	if(inputField.value.trim() === '') {
		//alert
		const p = document.querySelector('.white');
		p.innerText = 'Input field must not be empty'
		alert('Input field must not be empty');
		inputField.value = '';
		//return to stop the lines of code below from executing
		return;
	}

	//call the createTodo function with whatever is in the input field
	createTodo(inputField.value);

	//reset the input field to an empty string after creating
	inputField.value = '';
})

inputField.addEventListener('keypress', (e) => {
	if(e.keyCode != 13) return;

	if(inputField.value.trim() === '') {
		//alert
		const p = document.querySelector('.white');
		p.innerText = 'Input field must not be empty'
		alert('Input field must not be empty');
		inputField.value = '';
		//return to stop the lines of code below from executing
		return;
	}

	//call the createTodo function with whatever is in the input field
	createTodo(inputField.value);

	//reset the input field to an empty string after creating
	inputField.value = '';
})

