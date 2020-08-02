const initTodos=utils.storage.fetch('todos');

const state={
    todos:initTodos,
    filteredTodos:initTodos,
    filter:'all'
}

const fetchTodos=function(){
    return state.todos;
}

const updateState=function(type,data){
    switch(type){
        case 'todos':state['todos']=data['todos'];
        render(state['todos']);
        break;
        case 'filter': state['filter']=data['filter'];
        break;
        case 'filteredTodos':state['filteredTodos']=data['filteredTodos'];
        state['filter']=data['filter'];
        render(state['filteredTodos']);
        break;
    }
    utils.storage.save('todos',state['todos']);
}

render(fetchTodos());
