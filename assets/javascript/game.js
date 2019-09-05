// GLOBAL VARIABLES
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guessedLetters = [];
var lettersToGuess = null;
var remainingGuesses = 10;
var wins = 0;
var losses = 0;

// FUNCTION DECLARATIONS
var updateLettersToGuess = function(){
    lettersToGuess = letters[Math.floor(Math.random() * letters.length)];
}

// This function updates the text with the current value of remaining guesses. 
// Remaining guesses decreases by 1 each time a user presses a key onkeydown. 
var updateRemainingGuesses = function() {
    document.querySelector(".remaining-guesses").innerHTML = remainingGuesses;
    // $('.remaing-guesses').text(remaingGuesses); // rough example of jQuery
}

// This function updates the guessed letters the player has chosen to the class guesses.
// The join is used to keep the letters visible on the screen and is seperated by a comma
// .join() is an array method that turns an array into a string
// Example: ['Hello','there'] --> 'Hello there'     .join(' ')
var updateCorrectGuesses = function() {
    document.querySelector(".guesses").innerHTML = guessedLetters.join(",");
}

var reset = function(){
    remainingGuesses = 10;
    guessedLetters = [];
    updateLettersToGuess();
    updateRemainingGuesses();
    updateCorrectGuesses();
    console.log('LETTER TO GUESS', lettersToGuess)
};


// METHODS
// At start of game, generate letterToGuess
updateLettersToGuess();
console.log('Letter to guess:', lettersToGuess);

document.onkeydown = function(event){
    remainingGuesses--;

    var letter = event.key.toLowerCase();
    console.log(letter);
    guessedLetters.push(letter);
    
    updateRemainingGuesses();
    updateCorrectGuesses();
    
    if (letter === lettersToGuess) {
        wins++;
        document.querySelector(".wins").innerHTML = wins;
        reset();
    }
        if (remainingGuesses === 0) {
            losses ++;
            document.querySelector(".losses").innerHTML = losses;
            reset();
        }
    
}

