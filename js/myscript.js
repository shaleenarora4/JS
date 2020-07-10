var player1="undefined",player2="undefined";
var count=0;
var array = Array.from(Array(3), () => new Array(3));
var button_clicked = Array.from(Array(3), () => new Array(3));
var gameover=0;

function input1(clicked){
	if(clicked=="btn1" && player1!="undefined" && player2!="undefined")
		{	row=0;
			col=0;		
			count++;
			if(count%2!=0){
				array[row][col]=player1;
			}
			else{
				array[row][col]=player2;
			}
			if(typeof(button_clicked[row][col]) == "undefined"){
				button_clicked[row][col]=1;
				document.getElementById(clicked).innerHTML = array[row][col];
				if(gameover==0) {
				check();
				}
			}	
			
		}
	if(clicked=="btn2" && player1!="undefined" && player2!="undefined")
		{			
			row=0;
			col=1;
			count++;
			if(count%2!=0){
				array[row][col]=player1;
			}
			else{
				array[row][col]=player2;
			}
						if(typeof(button_clicked[row][col]) == "undefined"){
				button_clicked[row][col]=1;
				document.getElementById(clicked).innerHTML = array[row][col];
				if(gameover==0) {
				check();
				}
			}
		}
	if(clicked=="btn3" && player1!="undefined" && player2!="undefined")
		{	
			row=0;
			col=2;
			count++;
			if(count%2!=0){
				array[row][col]=player1;
			}
			else{
				array[row][col]=player2;
			}
				if(typeof(button_clicked[row][col]) == "undefined"){
				button_clicked[row][col]=1;
				document.getElementById(clicked).innerHTML = array[row][col];
				if(gameover==0) {
				check();
				}
			}
		}
	if(clicked=="btn4" && player1!="undefined" && player2!="undefined")
		{			
			row=1;
			col=0;
			count++;
			if(count%2!=0){
				array[row][col]=player1;
			}
			else{
				array[row][col]=player2;
			}
						if(typeof(button_clicked[row][col]) == "undefined"){
				button_clicked[row][col]=1;
				document.getElementById(clicked).innerHTML = array[row][col];
				if(gameover==0) {
				check();
				}
			}
		}
	if(clicked=="btn5" && player1!="undefined" && player2!="undefined")
		{			
			row=1;
			col=1;
			count++;
			if(count%2!=0){
				array[row][col]=player1;
			}
			else{
				array[row][col]=player2;
			}
						if(typeof(button_clicked[row][col]) == "undefined"){
				button_clicked[row][col]=1;
				document.getElementById(clicked).innerHTML = array[row][col];
				if(gameover==0) {
				check();
				}
			}
		}
	if(clicked=="btn6" && player1!="undefined" && player2!="undefined")
		{			
			row=1;
			col=2;
			count++;
			if(count%2!=0){
				array[row][col]=player1;
			}
			else{
				array[row][col]=player2;
			}
						if(typeof(button_clicked[row][col]) == "undefined"){
				button_clicked[row][col]=1;
				document.getElementById(clicked).innerHTML = array[row][col];
				if(gameover==0) {
				check();
				}
			}
		}	
	if(clicked=="btn7" && player1!="undefined" && player2!="undefined")
		{			
			row=2;
			col=0;
			count++;
			if(count%2!=0){
				array[row][col]=player1;
			}
			else{
				array[row][col]=player2;
			}
						if(typeof(button_clicked[row][col]) == "undefined"){
				button_clicked[row][col]=1;
				document.getElementById(clicked).innerHTML = array[row][col];
				if(gameover==0) {
				check();
				}
			}
		}
	if(clicked=="btn8" && player1!="undefined" && player2!="undefined")
		{			
			row=2;
			col=1;
			count++;
			if(count%2!=0){
				array[row][col]=player1;
			}
			else{
				array[row][col]=player2;
			}
				if(typeof(button_clicked[row][col]) == "undefined"){
				button_clicked[row][col]=1;
				document.getElementById(clicked).innerHTML = array[row][col];
				if(gameover==0) {
				check();
				}
			}
		}	
	if(clicked=="btn9" && player1!="undefined" && player2!="undefined")
		{			
			row=2;
			col=2;
			count++;
			if(count%2!=0){
				array[row][col]=player1;
			}
			else{
				array[row][col]=player2;
			}
			if(typeof(button_clicked[row][col]) == "undefined"){
				button_clicked[row][col]=1;
				document.getElementById(clicked).innerHTML = array[row][col];
				if(gameover==0) {
				check();
				}
			}
		}
}


function input2(clicked){
	if(clicked=="zero")
		{
			player1=0;
			player2="X";
			var x = document.getElementById("info");
			  if (!(x.style.display === "none")) {
			    x.style.display = "none";
			  }

			  	var y = document.getElementById("option");
		if (!(y.style.display === "none")) {
			    y.style.display = "none";
			  }
		}
	if(clicked=="cross"){
		player1="X";
		player2=0;
		var x = document.getElementById("info");
		if (!(x.style.display === "none")) {
			    x.style.display = "none";
			  }
	}	

	var y = document.getElementById("option");
		if (!(y.style.display === "none")) {
			    y.style.display = "none";
			  }
	}


	


function check(){
			if(row==0 && col==0)
			{	//document.getElementById("btn1").innerHTML = array[row][col];
				//count++;

				if((array[0][1]==array[row][col] && array[0][2]==array[row][col]) || 
					(array[1][1]==array[row][col] && array[2][2]==array[row][col]) ||
					 (array[0][1]==array[row][col] && array[0][2]==array[row][col])){
					
					if(count%2!=0){
						//alert("Player 1 wins");
						setTimeout(function() { alert("Player 1 wins"); }, 200);
						gameover=1;
					}
					else
					{
						//alert("Player 2 wins");
						setTimeout(function() { alert("Player 2 wins"); }, 200);
						gameover=1;
					}
				}
			}


		if(row==0 && col==1)
			{	//document.getElementById("btn2").innerHTML = array[row][col];
				//count++;
				if((array[0][0]==array[row][col] && array[0][2]==array[row][col]) || 
					(array[1][1]==array[row][col] && array[2][1]==array[row][col])){
					
					if(count%2!=0){
						//alert("Player 1 wins");
						setTimeout(function() { alert("Player 1 wins"); }, 200);
						gameover=1;
					}
					else
					{
						//alert("Player 2 wins");
						setTimeout(function() { alert("Player 2 wins"); }, 200);
						gameover=1;
					}
				}
			}

	

		if(row==0 && col==2)
			{	//document.getElementById("btn3").innerHTML = array[row][col];
				//count++;
				if((array[0][0]==array[row][col] && array[0][1]==array[row][col]) ||
				 (array[1][1]==array[row][col] && array[2][0]==array[row][col]) || 
				 (array[1][2]==array[row][col] && array[2][2]==array[row][col])){
				 	
					
					if(count%2!=0){
						//alert("Player 1 wins");
						setTimeout(function() { alert("Player 1 wins"); }, 200);
						gameover=1;
					}
					else
					{
						//alert("Player 2 wins");
						setTimeout(function() { alert("Player 2 wins"); }, 200);
						gameover=1;
					}
				}
			}

	

		if(row==1 && col==0)
			{	//document.getElementById("btn4").innerHTML = array[row][col];
				//count++;
				if((array[1][1]==array[row][col] && array[1][2]==array[row][col]) ||
				 (array[0][0]==array[row][col] && array[2][0]==array[row][col])){
				 	
					
					if(count%2!=0){
						//alert("Player 1 wins");
						setTimeout(function() { alert("Player 1 wins"); }, 200);
						gameover=1;
					}
					else
					{
						//alert("Player 2 wins");
						setTimeout(function() { alert("Player 2 wins"); }, 200);
						gameover=1;
					}
				}
			}

	

		if(row==1 && col==1)
			{	//document.getElementById("btn5").innerHTML = array[row][col];
				//count++;
				if((array[0][0]==array[row][col] && array[2][2]==array[row][col]) || 
					(array[0][1]==array[row][col] && array[2][1]==array[row][col]) ||
					 (array[1][0]==array[row][col] && array[1][2]==array[row][col])){
					
					
					if(count%2!=0){
						//alert("Player 1 wins");
						setTimeout(function() { alert("Player 1 wins"); }, 200);
						gameover=1;
					}
					else
					{
						//alert("Player 2 wins");
						setTimeout(function() { alert("Player 2 wins"); }, 200);
						gameover=1;
					}
				}
			}

	

		if(row==1 && col==2)
			{	//document.getElementById("btn6").innerHTML = array[row][col];
				//count++;
				if((array[1][0]==array[row][col] && array[1][1]==array[row][col]) || 
					(array[0][2]==array[row][col] && array[2][2]==array[row][col])){
					//count++;
					
					if(count%2!=0){
						//alert("Player 1 wins");
						setTimeout(function() { alert("Player 1 wins"); }, 200);
						gameover=1;
					}
					else
					{
						//alert("Player 2 wins");
						setTimeout(function() { alert("Player 2 wins"); }, 200);
						gameover=1;
					}
				}
			}

	

		if(row==2 && col==0)
			{	//document.getElementById("btn7").innerHTML = array[row][col];
				//count++;
				if((array[1][1]==array[row][col] && array[0][2]==array[row][col]) || 
					(array[2][1]==array[row][col] && array[2][2]==array[row][col]) || 
					(array[1][0]==array[row][col] && array[0][0]==array[row][col])){
					//count++;
					
					if(count%2!=0){
						//alert("Player 1 wins");
						setTimeout(function() { alert("Player 1 wins"); }, 200);
						gameover=1;
					}
					else
					{
						//alert("Player 2 wins");
						setTimeout(function() { alert("Player 2 wins"); }, 200);
						gameover=1;
					}
				}
			}

	

		if(row==2 && col==1)
			{	//document.getElementById("btn8").innerHTML = array[row][col];
				//count++;
				if((array[2][0]==array[row][col] && array[2][2]==array[row][col]) || 
					(array[1][1]==array[row][col] && array[0][1]==array[row][col])){
					//count++;
					
					if(count%2!=0){
						//alert("Player 1 wins");
						setTimeout(function() { alert("Player 1 wins"); }, 200);
						gameover=1;
					}
					else
					{
						//alert("Player 2 wins");
						setTimeout(function() { alert("Player 2 wins"); }, 200);
						gameover=1;
					}
				}
			}

	

		if(row==2 && col==2)
			{	//document.getElementById("btn9").innerHTML = array[row][col];
				//count++;
				if((array[1][1]==array[row][col] && array[0][0]==array[row][col]) || 
					(array[2][1]==array[row][col] && array[2][0]==array[row][col]) ||
					 (array[1][2]==array[row][col] && array[0][2]==array[row][col])){
					//count++;
						
					if(count%2!=0){
						//alert("Player 1 wins");
						setTimeout(function() { alert("Player 1 wins"); }, 300);
						gameover=1;
					}
					else
					{
						//alert("Player 2 wins");
						setTimeout(function() { alert("Player 2 wins"); }, 300);
						gameover=1;
					}
				}
			}


	}