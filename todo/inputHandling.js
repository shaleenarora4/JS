document.addEventListener('DOMContentLoaded', createStorage);

function createStorage() {
    const TasksCount=getPreviousData();
    inputlistener(TasksCount);
}


function getPreviousData() {
    let TotalItems=0;
    if (localStorage.getItem('totalItems') !== null) {
        TotalItems = Number(localStorage.getItem('totalItems'));
        for (let i = 0; i < TotalItems; i++) {
            const task = localStorage.getItem(i);
            const task_id = i;
            createListElement(task_id,task);
        }
    }
    return TotalItems;
}

function inputlistener(count) {
    const input = document.getElementById('input_text');
    input.addEventListener('keyup', function (e) {
        if (e.keyCode === 13 && e.target.value.trim()) {
            localStorage.setItem(count, e.target.value);
            createListElement(count++,e.target.value);
            e.target.value = '';
        }
    });
}
