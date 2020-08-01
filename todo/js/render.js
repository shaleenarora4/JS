const render=(function(){
const template=`<div class='item $completed'>
                <input class='item-checkbox' $checked type='checkbox' onclick="statusChange('$id')"/>
                <div class='item-title'>$task</div>
                <div class='priority'>
                    <div><input name=p0 class='priority-checkbox p0' type='checkbox' onclick="onPriorityInput('p0','$id')"/></div>
                    <div><input name=p1 class='priority-checkbox p1' type='checkbox' onclick="onPriorityInput('p1','$id')"/></div>
                    <div><input name=p2 class='priority-checkbox p2' type='checkbox' onclick="onPriorityInput('p2','$id')"/></div>
                </div>
                <div class='item-delete' onclick="deleteItem('$id')">X</div>
                </div>  `;
const parent=document.querySelector('.list');

return function(todos){
    parent.innerHTML='';
    for(let i=0;i<todos.length;i++){
        const todo=todos[i];
        const priority=todo.priority || ' ';
        let html=template.replace('$task',todo.title);
        html = html.replace(/\$id/g, todo.id);
        html=html.replace('$checked',todo.completed?'checked':'');
        html=html.replace('$completed',todo.completed?'completed':'');
        if(priority==='p0')
            html=html.replace('name=p0','checked');
        else if(priority==='p1')
            html=html.replace('name=p1','checked');
        else if(priority==='p2')
            html=html.replace('name=p2','checked');
        parent.innerHTML+=html;
    }}
}
 ());