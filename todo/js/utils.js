const storage={
    save:function(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    fetch:function(key){
        return JSON.parse(localStorage.getItem(key)) || [];
    }
}

const idGenerator=function(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const utils={
    storage:storage,
    id:idGenerator
}

clearStorage=function(){
    localStorage.clear();
    updateState('todos',{'todos':[]});
}

