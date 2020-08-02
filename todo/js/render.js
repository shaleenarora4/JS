const render=(function(){
const template=`<div class='item $completed'>
                <input class='item-checkbox' data-status-id='$id' $checked type='checkbox'/>
                <div class='item-title'>$task</div>
                <div class='priority'>
                    <div><input name=p0 priority-id='p0' input-id='$id' class='priority-checkbox p0' type='checkbox' /></div>
                    <div><input name=p1 priority-id='p1' input-id='$id' class='priority-checkbox p1' type='checkbox' /></div>
                    <div><input name=p2 priority-id='p2' input-id='$id' class='priority-checkbox p2' type='checkbox' /></div>
                </div>
                <div class='item-delete' data-delete-id='$id'>X</div>
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