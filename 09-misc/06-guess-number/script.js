
// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    let number = Math.floor(Math.random() * 100);

    let guess = prompt("Guess the number between 1 & 100");

    for (let y = 2; guess !== number; y++) {
        if(number > guess) {
            guess = prompt("Lower (Guess " + y + ")");
        }
        else if(number < guess) {
            guess = prompt("Higher (Guess " + y + ")");
        }
        else {
            alert( "That's it ! You needed " + (y - 1) + " guesses. ");
            break;
        }
    } 

})();