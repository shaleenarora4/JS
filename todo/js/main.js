
const parent=document.querySelector('.filter-list');
parent.addEventListener('click',function(e) {
    let childNodes=e.currentTarget.childNodes;
    for(let i=1;i<childNodes.length;i+=2){
        childNodes[i].style.background='';
    }
    if(e.target.hasAttribute('id'))
    e.target.style.background='#00968892';
});

const onInput=function(e){
    const title=e.target.value;
    if(e.keyCode===13 && title){
        const todos=fetchTodos();
        let updatedTodos=[...todos];
        updatedTodos.push({
            title:title,
            id:idGenerator(),
            completed:false,
            priority:''
        }
        )
        updateState('todos',{'todos':updatedTodos});
        e.target.value='';
    }
}
const statusChange=function(e){  
    const id=e.target.getAttribute('data-status-id');
    if(id){
        const todos=fetchTodos();
        for(let i=0;i<todos.length;i++){
            if(todos[i].id===id){
                todos[i].completed=!todos[i].completed;
                break;
            }
        }
        updateState('todos',{'todos':todos});
        filterChange(filter);
    }
}

const deleteItem=function(e){
    const id=e.target.getAttribute('data-delete-id');
    if(id){
        const todos=fetchTodos();
        let updatedTodos=[];
        for(let i=0;i<todos.length;i++){
            if(todos[i].id!==id){
                updatedTodos.push(todos[i]);
            }
        }
        updateState('todos',{'todos':updatedTodos});
        filterChange(filter);  
    }
}

const selectedFilter=function(e){
    const filter=e.target.getAttribute('id');
    updateState('filter',{'filter':filter});
    filterChange(filter);
}

const filterChange=function(currentFilter){
    filter=currentFilter;
    let todos=fetchTodos();
    
    if(filter==='all'){
        updateState('todos',{'todos':todos});
        return ; 
    }    
    else{
        let updatedTodos=[];    
        switch(filter){            
            case 'active': for(let i=0;i<todos.length;i++){
                if(!todos[i].completed)
                updatedTodos.push(todos[i]);                
            }
            updateState('filteredTodos',{'filteredTodos':updatedTodos,
            'filter':filter});
            break;  
            
            case 'completed': for(let i=0;i<todos.length;i++){
                if(todos[i].completed)
                updatedTodos.push(todos[i]);                
            }
            updateState('filteredTodos',{'filteredTodos':updatedTodos,
            'filter':filter});
            break;
            
            case 'priority' : const priorityTodos=priorityList();
            updateState('filteredTodos',{'filteredTodos':priorityTodos,
            'filter':filter});
            break;
            
            case 'clear' : clearStorage();
            break;
            
        } 
    }      
}

const onPriorityInput=function(e){
    const id=e.target.getAttribute('input-id');
    const priority=e.target.getAttribute('priority-id');
    if(id){
        let todos=fetchTodos();
        for(let i=0;i<todos.length;i++){
            if(id===todos[i].id)
            {
                todos[i].priority=priority;
                break;
            }
        }
        updateState('todos',{'todos':todos});
        filterChange(filter);
    }
}

const priorityList=function(){ 
    const todos=fetchTodos();
    let priorityTodos=[];
    for(let i=0;i<todos.length;i++){
        if(todos[i].priority==='p0')
        priorityTodos.push(todos[i]);
    }
    for(let i=0;i<todos.length;i++){
        if(todos[i].priority==='p1')
        priorityTodos.push(todos[i]);
    }
    for(let i=0;i<todos.length;i++){
        if(todos[i].priority==='p2')
        priorityTodos.push(todos[i]);
    }
    for(let i=0;i<todos.length;i++){
        if(todos[i].priority==='')
        priorityTodos.push(todos[i]);
    }
    return priorityTodos;
}     

const addListeners=function(){
    const input=document.querySelector('.input-container input');
    input.addEventListener('keyup',onInput);
    const filterList=document.querySelector('.filter-list');
    filterList.addEventListener('click',selectedFilter);
    const list=document.querySelector('.list');
    list.addEventListener('click',statusChange);
    list.addEventListener('click',deleteItem);
    list.addEventListener('click',onPriorityInput);
}

const init=function(){
    addListeners();
    todos=fetchTodos();
    render(todos);
}

init();