const render = (function () {

    const template = `
            <div class="list-item $completed">
                <input $checked onclick="onStatusChange('$id')" class="item-checkbox" type="checkbox" name="check-todo">
                <span class="item-title">$title</span>
                <span onclick="onDelete('$id')" class="item-delete">X</span>
            </div>`;

    const listEl = document.querySelector('.list');

    return function (todos) {
        listEl.innerHTML = '';
        for (let i = 0, len = todos.length; i < len; i++) {
            const todo = todos[i];
            let html = template.replace('$title', todo.title);
            html = html.replace(/\$id/g, todo.id);
            html = html.replace('$completed', todo.completed ? 'completed' : '');
            html = html.replace('$checked', todo.completed ? 'checked' : '');
            listEl.innerHTML += html;
        }
    }

})();
