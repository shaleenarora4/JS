const createListElement = createTemplate(`<div class='item' $id>
                                        <div id='radio-task'>
                                            <input $data_id type='radio' onclick="taskStatus(this.id)"/>
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
        html=html.replace('$id', `id=item${id}`);
        parent.innerHTML += html;
        localStorage.setItem('totalItems', id + 1);
        taskStatus(id);
        document.querySelector('span').innerHTML = ++id + " ";        
    };
}