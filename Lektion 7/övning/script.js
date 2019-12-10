const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
let todoItems = [];

function addTodo(text) {
    const todo = { id: Date.now(), text, checked: false };

    todoItems.push(todo);

    list.insertAdjacentHTML('afterbegin', `
        <li data-key="${todo.id}">
            <input id="${todo.id}" type="checkbox">
            <label for"${todo.id}" class="complete">
            <span>${todo.text}</span>
            <button class="delete">X</button>
        </li>
    `);
}

function deleteTodo(datakey) {
    todoItems = todoItems.filter(item => item.id !== Number(datakey));

    const item = document.querySelector(`[data-key='${datakey}']`);
    item.remove();
}
  
function toggleComplete(datakey) {
    const index = todoItems.findIndex(item => item.id === Number(datakey));
    todoItems[index].checked = !todoItems[index].checked;

    const item = document.querySelector(`[data-key]='${datakey}'`);
    if(todoItems[index].checked) {
        item.classList.add('completed');
    }
    else {
        item.classList.remove('completed');
    }
}


list.addEventListener('click', (e) => {
    if(e.target.classList.contains('complete')) {
        const datakey = e.target.parentElement.dataset.key;
        toggleComplete(datakey);
    }

    if(e.target.classList.contains('delete')) {
        const datakey = e.target.parentElement.dataset.key;
        deleteTodo(datakey);
    }


})


form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo(input.value);
    input.value = '';
    input.focus();

    console.log(todoItems)
})