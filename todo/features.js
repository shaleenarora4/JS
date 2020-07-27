taskStatus=getTaskStatus();

function getTaskStatus(){
    let status={};
    return function(id){
        const radioButton=document.getElementById(id);
        if(!status.hasOwnProperty(id))//if first time element created
            status[id]=false;
        else{    
            status[id]===true?(status[id]=false):(status[id]=true);
            onStatusChange(status,id);
        }   
    }
}

function onStatusChange(status,id){
    const radioButton=document.getElementById(id);
    status[id]===true?(radioButton.checked=true):(radioButton.checked=false);
}


