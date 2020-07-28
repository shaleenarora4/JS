function getList(id){
    if(id==='Active'){
        document.querySelector('#list').style.display='none';
        document.querySelector('#complete-list').style.display='none';
        document.querySelector('#active-list').style.display='flex';
        getActiveList();
    }
    else if(id==='Completed'){
        document.querySelector('#list').style.display='none';
        document.querySelector('#active-list').style.display='none';
        document.querySelector('#complete-list').style.display='flex';
        getCompleteList();
    }
    else{
        document.querySelector('#list').style.display='flex';
        document.querySelector('#active-list').style.display='none';
        document.querySelector('#complete-list').style.display='none';
    }
}

function getActiveList(){
    const statusObj=JSON.parse(localStorage.complete);
    const parent = document.getElementById('active-list');
    parent.innerHTML = '';
    for(key in statusObj){
        if(statusObj[key]===false){
            const div=document.getElementById(`item${key}`).cloneNode(true);
            // parent.insertAdjacentHTML('beforeend', div);
            parent.appendChild(div);
        }
    }
}

function getCompleteList(){
    const statusObj=JSON.parse(localStorage.complete);
    const parent = document.getElementById('complete-list');
    parent.innerHTML = '';
    for(key in statusObj){
        if(statusObj[key]===true){
            const div=document.getElementById(`item${key}`).cloneNode(true);
            // parent.insertAdjacentHTML('beforeend', div);
            parent.appendChild(div);
        }
    }
}