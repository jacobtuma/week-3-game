

		var wins = 0;
		var wordOptions = ["bounty", "jamie foxx", "christoph waltz", "candieland"];
		var ranWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
		var numGuess = 6;
		var incorrectLetters = [];
		var gameWord = [];
		var loseSfx = new Audio('lose.mp3');



		for (var i = 0; i < ranWord.length; i++) {
			if (ranWord[i] === " ") {
				gameWord.push("&nbsp;");
			}	
			else {
				gameWord.push("_");
			}	
		}

		console.log(ranWord);
		console.log(gameWord);


		var gameWordHTML = gameWord.join(" ");

		document.querySelector("#gameWord").innerHTML = gameWordHTML;


		document.querySelector("#guessesRemaining").innerHTML 

		document.onkeyup= function(event) {
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		if (ranWord.indexOf(userGuess) >= 0) {
			console.log("Correct");
			for (var i = 0; i < ranWord.length; i++) {
				if (ranWord[i] === userGuess) {
					gameWord[i] = userGuess;
				}
			}
			gameWordHTML = gameWord.join(" ");
			document.querySelector("#gameWord").innerHTML = gameWordHTML;
		}


		else if (incorrectLetters.indexOf(userGuess) >= 0){
			console.log("Already Guessed");
		}

		else{
			numGuess --; 
			incorrectLetters.push(userGuess);

			document.querySelector("#guessesRemaining").innerHTML = numGuess;		

			incorrectLetters.push(userGuess);

			incorrectLettersHTML = incorrectLetters.join(" ");
			document.querySelector("#incorrectLetters").innerHTML = incorrectLettersHTML;



			console.log("Wrong");
			console.log(incorrectLetters);


		}

	}           

	if (numGuess == 0) {
		losesfx.play();
	}
