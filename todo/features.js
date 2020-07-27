const taskStatus=getTaskStatus();

//status alteration when radio button clicked
function alterStatus(id){
    // debugger;
        let currentStatus=JSON.parse(localStorage.complete)[id];
        currentStatus=!currentStatus;
        const obj=JSON.parse(localStorage.complete); 
        obj[id]=currentStatus;
        localStorage.setItem('complete',JSON.stringify(obj));
        statusSettings(currentStatus,id)
}

function getTaskStatus(){
    let status={};
    if(localStorage.complete!==undefined)
        status=JSON.parse(localStorage.complete);
    return function(id){
        if(!status.hasOwnProperty(id))//if first time element created
            status[id]=false;
        else   //to set status settings on refresh 
            statusSettings(status[id],id); 
        localStorage.setItem('complete',JSON.stringify(status)); 
    }
}

function statusSettings(status,id){
    const radioButton=document.getElementById(id);
    const span=document.querySelector('span');
        if(status){// if before refresh this radio was checked or not 
        radioButton.checked=true;
        radioButton.nextElementSibling.style.textDecoration='line-through';
        radioButton.nextElementSibling.style.transition= '0.5'+'s';
        radioButton.nextElementSibling.style.color='#3937378f';
        // span.innerHTML=Number(span.innerHTML)-1+" ";
    }
    else{
        radioButton.checked=false;
        radioButton.nextElementSibling.style.textDecoration='none';
        radioButton.nextElementSibling.style.color='black';
        // span.innerHTML=Number(span.innerHTML)+1+" ";
    }
}


