
var row=0;
var col=0;
var array = Array.from(Array(3), () => new Array(3));
var button_clicked = Array.from(Array(3), () => new Array(3));
var count=0;
var gameover=0;
//var already_clicked=0;

function input1(clicked){
	if(clicked=="btn1")
		{			
			row=0;
			col=0;

		}
	if(clicked=="btn2")
		{			
			row=0;
			col=1;
		}
	if(clicked=="btn3")
		{	
			row=0;
			col=2;
		}
	if(clicked=="btn4")
		{			
			row=1;
			col=0;
		}
	if(clicked=="btn5")
		{			
			row=1;
			col=1;
		}
	if(clicked=="btn6")
		{			
			row=1;
			col=2;
		}	
	if(clicked=="btn7")
		{			
			row=2;
			col=0;
		}
	if(clicked=="btn8")
		{			
			row=2;
			col=1;
		}	
	if(clicked=="btn9")
		{			
			row=2;
			col=2;
		}
}

function input2(clicked){
	if(clicked=="zero")
		{
			//alert("zero is pressed for position "+row+col);
			
			//button_clicked[row][col]=button_clicked[row][col]+1;
			//document.getElementById("btn1").innerHTML = array[row][col];
			
			console.log(array[0][0],array[0][1],array[0][2]);
			console.log(array[1][0],array[1][1],array[1][2]);
			console.log(array[2][0],array[2][1],array[2][2]);

			if(typeof(button_clicked[row][col]) == "undefined"){
				button_clicked[row][col]=1;
				array[row][col]=0;
				if(gameover==0) {
				check();
				}
			}
		}
		if(clicked=="cross")
		{
			//alert("cross is pressed for position "+row+col);
					
			console.log(array[0][0],array[0][1],array[0][2]);
			console.log(array[1][0],array[1][1],array[1][2]);
			console.log(array[2][0],array[2][1],array[2][2]);

			if(typeof(button_clicked[row][col]) == "undefined"){
				button_clicked[row][col]=1;
				array[row][col]="X";
				if(gameover==0) {
				check();
				}
			}
		}
}

	function check(){
			if(row==0 && col==0)
			{	document.getElementById("btn1").innerHTML = array[row][col];
				count++;
				if((array[0][1]==array[row][col] && array[0][2]==array[row][col]) || 
					(array[1][1]==array[row][col] && array[2][2]==array[row][col]) ||
					 (array[0][1]==array[row][col] && array[0][2]==array[row][col])){
					
					if(count%2!=0){
						alert("Player 1 wins");
						gameover=1;
					}
					else
					{
						alert("Player 2 wins");
						gameover=1;
					}
				}
			}


		if(row==0 && col==1)
			{	document.getElementById("btn2").innerHTML = array[row][col];
				count++;
				if((array[0][0]==array[row][col] && array[0][2]==array[row][col]) || 
					(array[1][1]==array[row][col] && array[2][1]==array[row][col])){
					
					if(count%2!=0){
						alert("Player 1 wins");
						gameover=1;
					}
					else
					{
						alert("Player 2 wins");
						gameover=1;
					}
				}
			}

	

		if(row==0 && col==2)
			{	document.getElementById("btn3").innerHTML = array[row][col];
				count++;
				if((array[0][0]==array[row][col] && array[0][1]==array[row][col]) ||
				 (array[1][1]==array[row][col] && array[2][0]==array[row][col]) || 
				 (array[1][2]==array[row][col] && array[2][2]==array[row][col])){
				 	
					if(count%2!=0){
						alert("Player 1 wins");
						gameover=1;
					}
					else
					{
						alert("Player 2 wins");
						gameover=1;
					}
				}
			}

	

		if(row==1 && col==0)
			{	document.getElementById("btn4").innerHTML = array[row][col];
				count++;
				if((array[1][1]==array[row][col] && array[1][2]==array[row][col]) ||
				 (array[0][0]==array[row][col] && array[2][0]==array[row][col])){
				 	
					if(count%2!=0){
						alert("Player 1 wins");
						gameover=1;
					}
					else
					{
						alert("Player 2 wins");
						gameover=1;
					}
				}
			}

	

		if(row==1 && col==1)
			{	document.getElementById("btn5").innerHTML = array[row][col];
				count++;
				if((array[0][0]==array[row][col] && array[2][2]==array[row][col]) || 
					(array[0][1]==array[row][col] && array[2][1]==array[row][col]) ||
					 (array[1][0]==array[row][col] && array[1][2]==array[row][col])){
					
					if(count%2!=0){
						alert("Player 1 wins");
						gameover=1;
					}
					else
					{
						alert("Player 2 wins");
						gameover=1;
					}
				}
			}

	

		if(row==1 && col==2)
			{	document.getElementById("btn6").innerHTML = array[row][col];
				count++;
				if((array[1][0]==array[row][col] && array[1][1]==array[row][col]) || 
					(array[0][2]==array[row][col] && array[2][2]==array[row][col])){
					//count++;
					if(count%2!=0){
						alert("Player 1 wins");
						gameover=1;
					}
					else
					{
						alert("Player 2 wins");
						gameover=1;
					}
				}
			}

	

		if(row==2 && col==0)
			{	document.getElementById("btn7").innerHTML = array[row][col];
				count++;
				if((array[1][1]==array[row][col] && array[0][2]==array[row][col]) || 
					(array[2][1]==array[row][col] && array[2][2]==array[row][col]) || 
					(array[1][0]==array[row][col] && array[0][0]==array[row][col])){
					//count++;
					if(count%2!=0){
						alert("Player 1 wins");
						gameover=1;
					}
					else
					{
						alert("Player 2 wins");
						gameover=1;
					}
				}
			}

	

		if(row==2 && col==1)
			{	document.getElementById("btn8").innerHTML = array[row][col];
				count++;
				if((array[2][0]==array[row][col] && array[2][2]==array[row][col]) || 
					(array[1][1]==array[row][col] && array[0][1]==array[row][col])){
					//count++;
					if(count%2!=0){
						alert("Player 1 wins");
						gameover=1;
					}
					else
					{
						alert("Player 2 wins");
						gameover=1;
					}
				}
			}

	

		if(row==2 && col==2)
			{	document.getElementById("btn9").innerHTML = array[row][col];
				count++;
				if((array[1][1]==array[row][col] && array[0][0]==array[row][col]) || 
					(array[2][1]==array[row][col] && array[2][0]==array[row][col]) ||
					 (array[1][2]==array[row][col] && array[0][2]==array[row][col])){
					//count++;
					if(count%2!=0){
						alert("Player 1 wins");
						gameover=1;
					}
					else
					{
						alert("Player 2 wins");
						gameover=1;
					}
				}
			}


	}





