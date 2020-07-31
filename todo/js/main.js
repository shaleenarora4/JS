let filter='all';
const onInput=function(e){
    const title=e.target.value;
    if(e.keyCode===13 && title){
        todo=fetchtodos();
        todo.push({
            title:title,
            id:idGenerator(),
            completed:false
        }
        )
        savetodos(todo);
        render(todo)
        e.target.value='';
    }
}
const statusChange=function(id){  
    todo=fetchtodos();
    var eleFound=false;
    for(let i=0;i<todo.length;i++){//changed
        if(todo[i].id===id){
            todo[i].completed=!todo[i].completed;
            eleFound=true;
        }
        if(eleFound===true)
            break;
    }
    savetodos(todo);
    filterChange(filter);
}

const deleteItem=function(id){
    todo=fetchtodos();
    updatedtodo=[];
    for(let i=0;i<todo.length;i++){
        if(todo[i].id!==id){
            updatedtodo.push(todo[i]);
        }
    }
    savetodos(updatedtodo);
    filterChange(filter);    
}

const filterChange=function(currentFilter){
    filter=currentFilter;
    todo=fetchtodos();
    if(filter==='active'){
        temptodo=[];
        for(let i=0;i<todo.length;i++){
            if(!todo[i].completed){
                temptodo.push(todo[i]);
            }
        }
        todo=temptodo;
    }
    else if(filter==='completed'){
        temptodo=[];
        for(let i=0;i<todo.length;i++){
            if(todo[i].completed){
                temptodo.push(todo[i]);
            }
        }
        todo=temptodo;
    }
    render(todo);
}
const init=function(){
    todo=fetchtodos();
    render(todo);
}

init();