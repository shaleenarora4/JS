let todos = [];
let selectedFilter = 'completed';

const onInputChange = function (e) {
    const todos = fetchTodos();
    const title = e.target.value;
    if (e.keyCode === 13 && title) {
        todos.push({
            id: utils.generateId(),
            title: title,
            completed: false
        });
        render(todos);
        saveTodos(todos);
        clearInput();
    }
}

const onStatusChange = function (id) {
    const todos = fetchTodos();
    const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    saveTodos(updatedTodos);
    render(getFilteredTodos(selectedFilter));
}

const onFilterChange = function (filter) {
    selectedFilter = filter;
    const todos = getFilteredTodos(filter);
    render(todos);
}

const getFilteredTodos = function (filter) {
    let todos = fetchTodos();
    if (filter === 'active') {
        todos = todos.filter(todo => {
            return !todo.completed;
        });
    } else if (filter === 'completed') {
        todos = todos.filter(todo => {
            return todo.completed;
        });
    }
    return todos;
}

const onDelete = function (id) {
    const todos = fetchTodos();
    const updatedTodos = todos.filter(todo => todo.id !== id);
    render(updatedTodos);
    saveTodos(updatedTodos);
}

const clearInput = function () {
    const inputEl = document.querySelector('.input-container input');
    inputEl.value = '';
}

const init = function () {
    todos = fetchTodos();
    render(todos);
}

init();