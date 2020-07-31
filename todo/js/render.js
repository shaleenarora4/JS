const render=(function(){
const template=`<div class='item $completed'>
                <input class='item-checkbox' $checked type='checkbox' onclick="statusChange('$id')"/>
                <div class='item-title'>$task</div>
                <div class='item-delete' onclick="deleteItem('$id')">X</div>
                </div>  `;
const parent=document.querySelector('.list');

return function(todo){
    parent.innerHTML='';//scope of change, don't remove previous, add only new 
    for(let i=0;i<todo.length;i++){
        // debugger;
        let html=template.replace('$task',todo[i].title);
        html = html.replace(/\$id/g, todo[i].id);
        html=html.replace('$checked',todo[i].completed?'checked':'');
        html=html.replace('$completed',todo[i].completed?'completed':'');
        parent.innerHTML+=html;
    }}}
 ());