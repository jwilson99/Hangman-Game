//This contains the hangman code for the Pokemon Hangman website

//initializing vairables
var alphabet = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z'];

var pokemon = ['bulbasaur','charmander','squirtle','pikachu'];

//show guesses
var guesses = 5;
window.onload = function() {
    document.getElementById("guess").innerHTML = "Guesses left: ";
}

//Pick a random pokemon from a list as the word to guess
var answer = pokemon[Math.floor(Math.random()*pokemon.length)];

//create '_' placeholders in HTML document with the same number of characters as the pokemon
var answerLength = answer.length;
var underscore = Array.from('_'.repeat(answerLength));

window.onload = function() {
    document.getElementById("answer").innerHTML = underscore.join(' ');
}

//function runs when user presses a key
document.onkeyup = function(event) {
    //userGuess is recorded based on key pressed
    var userGuess = event.key;
    var status = true;
    //limits guesses to alphabet letters
    if (alphabet.indexOf(userGuess) > -1) {
        guesses = guesses - 1;
        userGuessLower = userGuess.toLowerCase();
        if (answer.indexOf(userGuessLower) > -1) {
            for (var i = 0; i < answer.length; i++) {
                if (answer[i] === userGuessLower) {
                    underscore[i] = userGuessLower;
                    document.getElementById("answer").innerHTML = underscore.join(' ');
                }
            }
        }
    }
    console.log(userGuess);
}

//show user guess
//lower guesses number

//if user guess matches a character in the pokemon name,