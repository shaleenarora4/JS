let filter='all';

const parent=document.querySelector('.filter-list');
parent.addEventListener('click',function(e) {
    let childNodes=e.currentTarget.childNodes;
    for(let i=1;i<childNodes.length;i+=2){
        childNodes[i].style.background='';
    }
    e.target.style.background='#00968892';
});

const onInput=function(e){
    const title=e.target.value;
    if(e.keyCode===13 && title){
        todo=fetchtodos();
        todo.push({
            title:title,
            id:idGenerator(),
            completed:false,
            priority:''
        }
        )
        savetodos(todo);
        render(todo)
        e.target.value='';
    }
}
const statusChange=function(id){  
    todos=fetchtodos();
    for(let i=0;i<todos.length;i++){
        if(todos[i].id===id){
            todos[i].completed=!todos[i].completed;
            break;
        }
    }
    savetodos(todos);
    filterChange(filter);
}

const deleteItem=function(id){
    debugger;
    const todos=fetchtodos();
    let updatedtodos=[];
    for(let i=0;i<todos.length;i++){
        if(todos[i].id!==id){
            updatedtodos.push(todos[i]);
        }
    }
    savetodos(updatedtodos);
    filterChange(filter);  
    
}

const filterChange=function(currentFilter){
    filter=currentFilter;
    let todos=fetchtodos();
    
    if(filter==='all'){
        render(todos);
        return; 
    }    
    else{
        let updatedtodos=[];    
        switch(filter){            
            case 'active': for(let i=0;i<todos.length;i++){
                if(!todos[i].completed)
                    updatedtodos.push(todos[i]);                
            }
            render(updatedtodos);
            break;

            case 'completed': for(let i=0;i<todos.length;i++){
                if(todos[i].completed)
                    updatedtodos.push(todos[i]);                
            }
            render(updatedtodos);
            break;

            case 'priority' : priorityList();
            break;

            case 'clear' : clearStorage();
                  filter='all';
            break;
            
        } 
    }   
    
}

const onPriorityInput=function(priority,id){
    let todos=fetchtodos();
    for(let i=0;i<todos.length;i++){
        if(id===todos[i].id)
        {
            todos[i].priority=priority;
            break;
        }
    }
    savetodos(todos);
    filterChange(filter);
}

const priorityList=function(){ 
    const todos=fetchtodos();
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
    render(priorityTodos)
}     


const init=function(){
    todos=fetchtodos();
    render(todos);
}

init();