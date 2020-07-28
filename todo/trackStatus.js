const taskStatus=getTaskStatus();
//status alteration when radio button clicked
function alterStatus(id){
        let currentStatus=JSON.parse(localStorage.complete)[id];
        currentStatus=!currentStatus;
        const obj=JSON.parse(localStorage.complete); 
        obj[id]=currentStatus;
        localStorage.setItem('complete',JSON.stringify(obj));
        statusSettings(currentStatus,id);
}

function getTaskStatus(){
    let status={};//created to keep track of status of all new elements created. 
    if(localStorage.complete!==undefined)
        status=JSON.parse(localStorage.complete);
    return function(id){
        if(!status.hasOwnProperty(id)){//if first time element created
            status[id]=false;
            statusSettings(status[id],id);//just want to set span properties 
        }    
        else //to set status settings on refresh - the id's already exists in local mem
            statusSettings(status[id],id); 
        localStorage.setItem('complete',JSON.stringify(status)); 
    };
}

function statusSettings(status,id){
    // debugger;
    const radioButton=document.getElementById(id);
    const span=document.querySelector('span');
    // debugger;
        if(status){
        radioButton.checked=true;
        radioButton.nextElementSibling.style.textDecoration='line-through';
        radioButton.nextElementSibling.style.transition= '0.5'+'s';
        radioButton.nextElementSibling.style.color='#3937378f';
        if (Number(span.innerHTML)>0)
            span.innerHTML=Number(span.innerHTML)-1+" " ;
        if(span.innerHTML===" ")//on refresh nothing is present in span 
            span.innerHTML=0+" ";
    }
    else{
        radioButton.checked=false;
        radioButton.nextElementSibling.style.textDecoration='none';
        radioButton.nextElementSibling.style.color='black';        
        //on refresh nothing is present in span 
        span.innerHTML===" "?span.innerHTML=1+" ":span.innerHTML=Number(span.innerHTML)+1+" ";             
    }
}


