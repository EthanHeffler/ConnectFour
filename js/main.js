$(document).ready(function () {
	var gameOver = false;
	var winningModal = $('#winningModal');
	var div = $(".column div");
	
    $(".black").hide();
	

	//makes sure you can only click on clickable cirlces, gives cirlces right color
    div.click(function () {
		var currentBox = $(this);
        if (!currentBox.hasClass("clicked")) {
            if (currentBox.is(':last-child') || currentBox.next("div").hasClass("clicked")) {
				if (gameOver == false) {
					if ($('#status span.red').is(':visible')) {
						currentBox.addClass("clicked");
						currentBox.addClass("red");
					} else {
						currentBox.addClass("clicked");
						currentBox.addClass("black");
					}
					$("#status span").toggle();
					checkBoard(currentBox);
				}
            }
        }
    });
		
	

	//checks for winning combinations on every click
    function checkBoard(currentBox) {
        var currentBoxClass = currentBox.attr("class");
        var winningColor = currentBoxClass.split(" ")[1];

        //checks vertically
        if (currentBox.next().hasClass(currentBoxClass)) {
            var secondBox = currentBox.next();
            if (secondBox.next().hasClass(currentBoxClass)) {
                var thirdBox = secondBox.next();
                if (thirdBox.next().hasClass(currentBoxClass)) {
                    gameWon(winningColor);
                }
            }
        }

        //checks horizontally
        var whichChild = currentBox.parent().children("div").index(currentBox);
		
        var OneToTheRight = currentBox.parent().next().children("div:nth-child(" + (whichChild + 1) + ")");
        var TwoToTheRight = currentBox.parent().next().next().children("div:nth-child(" + (whichChild + 1) + ")");
        var ThreeToTheRight = currentBox.parent().next().next().next().children("div:nth-child(" + (whichChild + 1) + ")");
        
		var OneToTheLeft = currentBox.parent().prev().children("div:nth-child(" + (whichChild + 1) + ")");
        var TwoToTheLeft = currentBox.parent().prev().prev().children("div:nth-child(" + (whichChild + 1) + ")");
        var ThreeToTheLeft = currentBox.parent().prev().prev().prev().children("div:nth-child(" + (whichChild + 1) + ")");

		if (OneToTheRight.hasClass(currentBoxClass) && TwoToTheRight.hasClass(currentBoxClass) && ThreeToTheRight.hasClass(currentBoxClass)) {
            gameWon(winningColor);
        }

        if (OneToTheRight.hasClass(currentBoxClass) && TwoToTheRight.hasClass(currentBoxClass) && OneToTheLeft.hasClass(currentBoxClass)) {
            gameWon(winningColor);
        }

        if (OneToTheRight.hasClass(currentBoxClass) && TwoToTheLeft.hasClass(currentBoxClass) && OneToTheLeft.hasClass(currentBoxClass)) {
            gameWon(winningColor);
        }
		
		if (OneToTheLeft.hasClass(currentBoxClass) && TwoToTheLeft.hasClass(currentBoxClass) && ThreeToTheLeft.hasClass(currentBoxClass)) {
            gameWon(winningColor);
        }



        //checks diagonally
		var OneToTheRightDownOne = currentBox.parent().next().children("div:nth-child(" + (whichChild + 2) + ")");
		var TwoToTheRightDownTwo = currentBox.parent().next().next().children("div:nth-child(" + (whichChild + 3) + ")");
		var ThreeToTheRightDownThree = currentBox.parent().next().next().next().children("div:nth-child(" + (whichChild + 4) + ")");
		
		var OneToTheLeftDownOne = currentBox.parent().prev().children("div:nth-child(" + (whichChild + 2) + ")");
		var TwoToTheLeftDownTwo = currentBox.parent().prev().prev().children("div:nth-child(" + (whichChild + 3) + ")");
		var ThreeToTheLeftDownThree = currentBox.parent().prev().prev().prev().children("div:nth-child(" + (whichChild + 4) + ")");
		
		var OneToTheRightUpOne = currentBox.parent().next().children("div:nth-child(" + whichChild + ")");
		var TwoToTheRightUpTwo = currentBox.parent().next().next().children("div:nth-child(" + (whichChild - 1) + ")");
		var ThreeToTheRightUpThree = currentBox.parent().next().next().next().children("div:nth-child(" + (whichChild - 2) + ")");
		
		var OneToTheLeftUpOne = currentBox.parent().prev().children("div:nth-child(" + whichChild + ")");
		var TwoToTheLeftUpTwo = currentBox.parent().prev().prev().children("div:nth-child(" + (whichChild - 1) + ")");
		var ThreeToTheLeftUpThree = currentBox.parent().prev().prev().prev().children("div:nth-child(" + (whichChild - 2) + ")");
		
		
		
		//First box/left to right/top to bottom
        if (OneToTheRightDownOne.hasClass(currentBoxClass) && TwoToTheRightDownTwo.hasClass(currentBoxClass) && ThreeToTheRightDownThree.hasClass(currentBoxClass)) {
            gameWon(winningColor);
        }
		
		//Second box/left to right/top to bottom
        if (OneToTheLeftUpOne.hasClass(currentBoxClass) && OneToTheRightDownOne.hasClass(currentBoxClass) && TwoToTheRightDownTwo.hasClass(currentBoxClass)) {
            gameWon(winningColor);
        }
		
		//Third box/left to right/top to bottom
        if (TwoToTheLeftUpTwo.hasClass(currentBoxClass) && OneToTheLeftUpOne.hasClass(currentBoxClass) && OneToTheRightDownOne.hasClass(currentBoxClass)) {
            gameWon(winningColor);
        }
		
		//Fourth box/left to right/top to bottom
        if (ThreeToTheLeftUpThree.hasClass(currentBoxClass) && TwoToTheLeftUpTwo.hasClass(currentBoxClass) && OneToTheLeftUpOne.hasClass(currentBoxClass)) {
            gameWon(winningColor);
        }
		
		//First box/right to left/top to bottom
        if (OneToTheLeftDownOne.hasClass(currentBoxClass) && TwoToTheLeftDownTwo.hasClass(currentBoxClass) && ThreeToTheLeftDownThree.hasClass(currentBoxClass)) {
            gameWon(winningColor);
        }
		
		//Second box/right to left/top to bottom
        if (OneToTheRightUpOne.hasClass(currentBoxClass) && OneToTheLeftDownOne.hasClass(currentBoxClass) && TwoToTheLeftDownTwo.hasClass(currentBoxClass)) {
            gameWon(winningColor);
        }
		
		//Third box/right to left/top to bottom
        if (TwoToTheRightUpTwo.hasClass(currentBoxClass) && OneToTheRightUpOne.hasClass(currentBoxClass) && OneToTheLeftDownOne.hasClass(currentBoxClass)) {
            gameWon(winningColor);
        }
		
		//Fourth box/right to left/top to bottom
        if (ThreeToTheRightUpThree.hasClass(currentBoxClass) && TwoToTheRightUpTwo.hasClass(currentBoxClass) && OneToTheRightUpOne.hasClass(currentBoxClass)) {
            gameWon(winningColor);
        }
    }
	
	
	
	//restarts game
    $(".clearBoard").click(function () {
        div.each(function () {
            $(this).attr("class", "");
        });
		gameOver = false;
        return false;
    });
	
	
	//shows modal when game is won
	function gameWon (winningColor) {
		gameOver = true;
		winningModal.fadeIn().css('background-color', winningColor);
		$('#winningColor').text(winningColor);
	}
	
	
	//closes winning game modal
	$(".closeModal, .clearBoard").click(function () {
        winningModal.fadeOut();
    });


    //end document ready
});
