var col='white';
//debugger;
document.addEventListener('DOMContentLoaded',setUpBoard);

function setUpBoard(){
  const parent=document.getElementById('chessboard');
  for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
      const div=document.createElement('div');
      div.classList.add('item');
      div.style.color=col;
      col=col=='white'?col='black':col='white';
      div.style.backgroundColor=col;
      div.innerHTML=String.fromCharCode(65+i)+(j+1);
      parent.appendChild(div);
    }
    col=col=='white'?col='black':col='white';
  }
}