const savetodos=function(todo){
    utils.storage.save('todos',todo);
}

const fetchtodos=function(){
    return utils.storage.fetch('todos');
}
