//This contains the hangman code for the Pokemon Hangman website

//initializing vairables
//accepted alphabet letters
var alphabet = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z'];

//potential words to guess
var pokemon = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran', 'nidorina', 'nidoqueen', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebell', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', 'farfetchd', 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowsee', 'hypno', 'krabby', 'kingler', 'voltorb', 'electrode', 'exeggcute', 'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 'weezing', 'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking', 'staryu', 'starmie', 'mrmime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp', 'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon', 'omanyte', 'omastar', 'kabuto', 'kabutops', 'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres', 'dratini', 'dragonair', 'dragonite', 'mewtwo', 'mew'];

//guesses left
var guesses = 10;

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

    //shows who's that pokemon? header
    document.getElementById("whosthatpokemon").innerHTML = "Who's that pokemon?";
}

//function runs when user presses a key
document.onkeyup = function(event) {
    if (guesses === 0 || underscore.join('') === answer){
    //    prevents guessing after game end
    }
    else {
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
    }

    //button function
    document.getElementById("playagain").onclick = function() {
        //resets music
        document.getElementById("audio").innerHTML = "<audio autoplay loop> <source src='assets/music/game.mp3' type='audio/mpeg'></audio>";

        //resets the random pokemon selection for the next round after win or loss
        answer = pokemon[Math.floor(Math.random()*pokemon.length)];

        answerLength = answer.length;

        underscore = Array.from('_'.repeat(answerLength));

        document.getElementById("answer").innerHTML = underscore.join(' ');

        //resets letters guessed after a win or loss
        letterGuess = [];
        document.getElementById("lettersGuessed").innerHTML = "Letters guessed: " + letterGuess;

        //resets guesses after a win or loss
        guesses = 10;

        document.getElementById("guessCount").innerHTML = "Guesses left: " + guesses;

        //hide button
        document.getElementById("playagain").style.visibility = 'hidden';

        //replaces pokemon image with who's that pokemon
        document.getElementById('pokemonimg').src = "assets/images/whosthatpokemon.gif";

        //resets who's that pokemon text
        document.getElementById("whosthatpokemon").innerHTML = "Who's that pokemon?";
    }

    //game over function for both wins and losses
    function gameOver() {
        //replaces pokemon image with an image of the last pokemon
        document.getElementById('pokemonimg').src = "assets/images/"+answer+".png";

        //show button
        document.getElementById("playagain").style.visibility = 'visible';

        //resets blank underscores
        underscore = "_ _ _ _ _";

        document.getElementById("answer").innerHTML = underscore.join(' ');
    }

    //checks to see if the answer has been fully guessed by comparing the underscore value to the answer
    if (underscore.join('') === answer) {

        //updates win count if underscore is equal to the answer
        wins = wins + 1;

        document.getElementById("wins").innerHTML = "Wins: " + wins;

        //announces a win with the answer
        document.getElementById("whosthatpokemon").innerHTML = "You win! It's " + answer.toUpperCase()+"!";

        //win music
        document.getElementById("audio").innerHTML = "<audio autoplay> <source src='assets/music/win.mp3' type='audio/mpeg'></audio>";

        //game reset
        gameOver();

    }
    if (guesses === 0) {
        //updates losses by 1 when guesses equal 0
        losses = losses + 1;

        document.getElementById("losses").innerHTML = "Losses: " + losses;

        //announces a loss with the answer
        document.getElementById("whosthatpokemon").innerHTML = "You lose! It's " + answer.toUpperCase()+"!";

        //lose music
        document.getElementById("audio").innerHTML = "<audio autoplay> <source src='assets/music/lose.mp3' type='audio/mpeg'></audio>";

        //game reset
        gameOver()
    }
}
