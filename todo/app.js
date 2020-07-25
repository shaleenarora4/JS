var task_text,count=0,myStorage;
const task_template=`<div id='item'>
                    <div id='radio-task'>
                        <input $data_id type='radio'/>
                        <p>$task_detail</p>
                    </div>
                    <div id='button_div'>
                        <button id='delete'>X</button>
                    </div>
                    </div>`

document.addEventListener('DOMContentLoaded',createStorage);

function createStorage(){
    myStorage = window.localStorage;
    getPreviousData();
    inputlistener();
}
function getPreviousData(){
    if(myStorage.getItem('totalItems')!== null){
        existingTotal=Number(myStorage.getItem('totalItems'));
        for(let i=0;i<existingTotal;i++){
            const task=myStorage.getItem(i);
            const task_id=i;
            createListElement(task,task_id);
        }
        document.querySelector('span').innerHTML=existingTotal+" "; 
        count=existingTotal;
    }
}

function inputlistener(){
    const input=document.getElementById('input_text');
    input.addEventListener('keyup',function(e){
        if (e.keyCode === 13 && e.target.value) {
            addTasktoStorage(e.target.value,count++);
            e.target.value='';
        }    
    });
}

function addTasktoStorage(task,task_id){
    myStorage.setItem(task_id,task);
    createListElement(task,task_id);
}

function createListElement(task,id){
    const parent=document.getElementById('list');
    let html=task_template.replace('$task_detail',task);
    html=html.replace('$data_id',`id=${id}`);
    parent.innerHTML+=html;  
    myStorage.setItem('totalItems',count);
    document.querySelector('span').innerHTML=count+" "; 
}


