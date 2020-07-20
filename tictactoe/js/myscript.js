var player1,player2,gameover=0;
var count=1;
var pos;
var button_clicked = Array.from(Array(3), () => new Array(3));
//function to assign 0 or X to player1 and player2
function input(clicked){
	if(clicked=="zero"){
		player1=0;
		player2="X";
	}
	if(clicked=="cross"){
		player1="X";
		player2="0";
	}
	//to hide cross and 0 option and info displayed as soon as user clicks selects the option
	if(player1!="undefined"){
		document.getElementById("para").style.display="none";
		document.getElementById("zero").style.display="none";
		document.getElementById("cross").style.display="none";
	}
}

const parent=document.getElementById("parent");
parent.addEventListener('click',event =>{    	
			pos=event.target.id.split(",");			
    		//console.log(pos[0],pos[1]);
    		//debugger;
    		if(count%2!=0 && gameover==0 && typeof(button_clicked[pos[0]][pos[1]])=="undefined" && typeof(player1)!="undefined" && typeof(player2)!="undefined"){
	    		button_clicked[pos[0]][pos[1]]=player1;
	    		event.target.innerHTML=button_clicked[pos[0]][pos[1]]; 
	    		if(gameover==0){
					check(pos);
					count++;   }
    		}

    		if(count%2==0 && gameover==0 && typeof(button_clicked[pos[0]][pos[1]])=="undefined" && typeof(player1)!="undefined" && typeof(player2)!="undefined"){
	    		button_clicked[pos[0]][pos[1]]=player2;
				event.target.innerHTML=button_clicked[pos[0]][pos[1]]; 
				if(gameover==0){
					check(pos);
					count++;   }		
			}    		
}); 


/*
1. first checks if the input given matches the entire row (checks only the row where element is selected) of the given input
2. If row doesn't match then it checks if the input given matches the entire column (checks only the column where element 
is selected) of the given input.
3. If both row and column doesn't match it checks if the element lie on the diagnol,if it does then both the diagnols are checked. 
if any of the above condition is true, it gives an alert ---- (player1/player2) wins and shows game over.
*/

function check(pos){
	//checking in the entire row of selected element	
		var row_flag=0;
		//console.log(row_flag);
		for(var j=0;j<3;j++){
			//debugger;
			if(!(button_clicked[pos[0]][pos[1]]==button_clicked[pos[0]][j])){
					row_flag=1;
			}
			//if any element of row not matched break the loop
			if(row_flag==1)
				break;
			//console.log(row_flag);
		}
		if(row_flag==0){//if row matched
			gameover=1;
			if(count%2!=0)
			setTimeout(function() { alert("Player 1 wins"); }, 200);
			else
			setTimeout(function() { alert("Player 2 wins"); }, 200);
		}
		//check entire column of selected element only if row not matched
		else{
			var column_flag=0;
			for(var i=0;i<3;i++){
				//debugger;
				if(!(button_clicked[pos[0]][pos[1]]==button_clicked[i][pos[1]])){
						column_flag=1;
				}
				//if any element of column not matched break the loop
				if(column_flag==1)
					break;
				//console.log(row_flag);
		    }	
			if(column_flag==0){//if column matched
				gameover=1;
				if(count%2!=0)
				setTimeout(function() { alert("Player 1 wins"); }, 200);
				else
				setTimeout(function() { alert("Player 2 wins"); }, 200);
			}

			//check both diagnol as both column and row didn't match
			else{
				var d1=0;
				var d2=0;
				if(parseInt(pos[0])+parseInt(pos[1])==2 || pos[0]==pos[1]){ // checking if element lie on the diagnol
					for(var z=0;z<3;z++){
						//debugger;
						if(!(button_clicked[pos[0]][pos[1]]==button_clicked[z][z]))
							d1=1;
						if(!(button_clicked[pos[0]][pos[1]]==button_clicked[z][2-z]))
							d2=1;						
					}
					if(d1==0 || d2==0){
						gameover=1;
						if(count%2!=0)
						setTimeout(function() { alert("Player 1 wins"); }, 200);
						else
						setTimeout(function() { alert("Player 2 wins"); }, 200);
					}
				}
			}
		}
	}







