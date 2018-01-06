$(document).ready(function() {
    
    var randomNum = Math.floor(Math.random() * ((120-19)+1) + 19);
    var userGuessTotal = 0;
    var winCounter = 0;
    var loseCounter = 0;
    var gemNum1 = Math.floor(Math.random() * ((12-1)+1) + 1);
    var gemNum2 = Math.floor(Math.random() * ((12-1)+1) + 1);
   	var gemNum3 = Math.floor(Math.random() * ((12-1)+1) + 1);
   	var gemNum4 = Math.floor(Math.random() * ((12-1)+1) + 1);

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
	   	$('.total').text(userGuessTotal); 
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
	$(".randomNum").html(randomNum);
	updateWin();
	updateLose();
	$(".total").html(userGuessTotal);


});