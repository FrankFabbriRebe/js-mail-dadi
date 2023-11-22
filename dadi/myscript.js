// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// random user number
const userNumber = parseInt(Math.floor(Math.random() * 6) + 1);
console.log("User number: " + userNumber);

//random computer number
const computerNumber = parseInt(Math.floor(Math.random() * 6) + 1);
console.log("Computer number: " + computerNumber);

// choose the winner
if (userNumber > computerNumber)    {
    console.log("The user won!");
} else if (userNumber < computerNumber) {
    console.log("The computer won!");
} else if (userNumber === computerNumber) {
    console.log("This is a draw!");
}