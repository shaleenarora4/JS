const createListElement = createTemplate(`<div id='item'>
                                        <div id='radio-task'>
                                            <input $data_id type='radio'/>
                                            <p>$task_detail</p>
                                        </div>
                                        <div id='button_div'>
                                            <button id='delete'>X</button>
                                        </div>
                                        </div>`);


function createTemplate(Tasktemplate){
    return function(id,task) {
        const parent = document.getElementById('list');
        let html = Tasktemplate.replace('$task_detail', task);
        html = html.replace('$data_id', `id=${id}`);
        parent.innerHTML += html;
        localStorage.setItem('totalItems', id + 1);
        document.querySelector('span').innerHTML = ++id + " ";
    };
}