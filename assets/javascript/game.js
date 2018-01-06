$(document).ready(function() {
       
    var winCounter = loseCounter = userGuessTotal = gemNum1 = gemNum2 = gemNum3 = gemNum4 = 0;
    
	var updateWin = function() {
		$("#win").html("Wins: " + winCounter);
	};
	var updateLose = function() {
		$("#lose").html("Lose: " + loseCounter);
	};

	var reset = function() {
		randomNum = Math.floor(Math.random() * ((120-19)+1) + 19);
		userGuessTotal = 0;
		gemNum1 = Math.floor(Math.random() * ((12-1)+1) + 1);
	    gemNum2 = Math.floor(Math.random() * ((12-1)+1) + 1);
	   	gemNum3 = Math.floor(Math.random() * ((12-1)+1) + 1);
	   	gemNum4 = Math.floor(Math.random() * ((12-1)+1) + 1);
	   	updateWin();
		updateLose();
	   	$('.total').html(userGuessTotal); 
	   	$(".randomNum").html(randomNum);
	};
	
	var checkerStatus = function () {

	    $('.total').text(userGuessTotal); 
		
		if (userGuessTotal == randomNum){
			winCounter ++;
			updateWin();	
			reset();
		}
		else if ( userGuessTotal > randomNum){
			loseCounter++;
			updateLose();	
			reset();
		}
	};

	
	$('#one').on ('click', function(){
	    userGuessTotal += gemNum1;    
	    checkerStatus();
  	});

	$('#two').on ('click', function(){
	    userGuessTotal += gemNum2;    
	    checkerStatus();
  	});

	$('#three').on ('click', function(){
	    userGuessTotal += gemNum3; 
	    checkerStatus();
  	});

	$('#four').on ('click', function(){
	    userGuessTotal += gemNum4;    
	    checkerStatus();
  	});

	// initial load
	reset();

});