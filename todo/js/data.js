const saveTodos = function (todos) {
    utils.storage.save('todos', todos);
}

const fetchTodos = function () {
    return utils.storage.fetch('todos') || [];
}