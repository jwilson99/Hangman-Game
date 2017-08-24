//This contains the hangman code for the Pokemon Hangman website

//initializing vairables
//accepted alphabet letters
var alphabet = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z'];

//potential words to guess
var pokemon = ['bulbasaur','charmander','squirtle','pikachu'];

//guesses left
var guesses = 12;

//number of wins
var wins = 0;

//number of losses
var losses = 0;

//Pick a random pokemon from a list as the word to guess
var answer = pokemon[Math.floor(Math.random()*pokemon.length)];

//create '_' placeholders in HTML document with the same number of characters as the pokemon
var answerLength = answer.length;

var underscore = Array.from('_'.repeat(answerLength));

//initializes an array to store letter guesses
var letterGuess = [];

//initializes text on the window load
window.onload = function() {

    //shows underscore placeholders
    document.getElementById("answer").innerHTML = underscore.join(' ');

    //shows guesses left
    document.getElementById("guessCount").innerHTML = "Guesses left: " + guesses;

    //shows letters guessed
    document.getElementById("lettersGuessed").innerHTML = "Letters guessed: " + letterGuess;
}

//function runs when user presses a key
document.onkeyup = function(event) {

    //userGuess is recorded based on key pressed
    var userGuess = event.key;

    //limits guesses to alphabet letters
    if (alphabet.indexOf(userGuess) > -1) {

        //converts userGuess to lower case
        userGuessLower = userGuess.toLowerCase();

        if (answer.indexOf(userGuessLower) < 0) {

            if (letterGuess.indexOf(userGuessLower) < 0) {

                guesses = guesses - 1;

                document.getElementById("guessCount").innerHTML = "Guesses left: " + guesses;
            }
        }

        //appends userGuess to lettersGuessed array and updates document
        if (letterGuess.indexOf(userGuessLower) < 0) {
            letterGuess.push(userGuessLower);

            document.getElementById("lettersGuessed").innerHTML = "Letters guessed: " + letterGuess;
        }

        //checks to see if the guess is part of the answer
        if (answer.indexOf(userGuessLower) > -1) {

            //cycles through the answer to find locations matching the user guess
            for (var i = 0; i < answer.length; i++) {

                if (answer[i] === userGuessLower) {

                    //updates underscore with letter at correct location
                    underscore[i] = userGuessLower;

                    //updates the document by replacing underscores with correct letter guesses
                    document.getElementById("answer").innerHTML = underscore.join(' ');
                    }
            }
        }
    }
    //checks to see if the answer has been fully guessed by comparing the underscore value to the answer
    if (underscore.join('') === answer) {

        //updates win count if underscore is equal to the answer
        wins = wins + 1;

        document.getElementById("wins").innerHTML = "Wins: " + wins;

        //resets the random pokemon selection for the next round after a win
         answer = pokemon[Math.floor(Math.random()*pokemon.length)];

        answerLength = answer.length;

        underscore = Array.from('_'.repeat(answerLength));

        document.getElementById("answer").innerHTML = underscore.join(' ');

        //resets letters guessed after a win
        letterGuess = [];
        document.getElementById("lettersGuessed").innerHTML = "Letters guessed: " + letterGuess;

        //resets guesses after a win
        guesses = 12;

        document.getElementById("guessCount").innerHTML = "Guesses left: " + guesses;

    }
    if (guesses === 0) {
        //updates losses by 1 when guesses equal 0
        losses = losses + 1;

        document.getElementById("losses").innerHTML = "Losses: " + losses;

        //resets the random pokemon selection for the next round after a loss
        answer = pokemon[Math.floor(Math.random()*pokemon.length)];

        answerLength = answer.length;

        underscore = Array.from('_'.repeat(answerLength));

        document.getElementById("answer").innerHTML = underscore.join(' ');

        //resets letters guessed after a loss
        letterGuess = [];
        document.getElementById("lettersGuessed").innerHTML = "Letters guessed: " + letterGuess;

        //resets guesses after a loss
        guesses = 12;

        document.getElementById("guessCount").innerHTML = "Guesses left: " + guesses;
    }
}


//show user guess
//lower guesses number

//if user guess matches a character in the pokemon name,