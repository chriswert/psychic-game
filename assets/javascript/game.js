var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var guessedLetters = [];

var lettersToGuess = null;

var remainingGuesses = 9;

var wins = 0;
var losses = 0;

var updateLettersToGuess = function(){
    lettersToGuess = letters[Math.floor(Math.random() * letters.length)];
}

var updateRemainingGuesses = function() {
    document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
}

var updateCorrectGuesses = function(){
    document.querySelector("#correct-guesses").innerHTML = remainingGuesses.join(",");
}

var reset = function(){
    remainingGuesses = 9;
    guessedLetters = [];
    updateLettersToGuess();
    updateRemainingGuesses();
    updateCorrectGuesses();
};

