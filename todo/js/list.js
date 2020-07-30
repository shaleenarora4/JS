const createListElement = createTemplate();

function createTemplate(){
    const Tasktemplate=`<div class='item' $id>
                        <div id='radio-task'>
                            <input $data_id type='radio' onclick="alterStatus(this.id)"/>
                            <p>$task_detail</p>
                        </div>
                        <div id='button_div'>
                            <button id='delete' >X</button>
                        </div>
                        </div>`;
    return function(id,task) {
        const parent = document.getElementById('list');
        let html = Tasktemplate.replace('$task_detail', task);
        html = html.replace('$data_id', `id=${id}`);
        html=html.replace('$id', `id=item${id}`);
        // parent.innerHTML += html;
        parent.insertAdjacentHTML('beforeend', html);
        localStorage.setItem('totalItems', id + 1);
        taskStatus(id);       
    };
}

