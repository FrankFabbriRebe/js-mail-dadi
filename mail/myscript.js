// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// input email user
const email = prompt("Inserisci la tua email");

// array valid email
const validEmail = ["franco@gmail.com", "paolo@gmail.com", "marco@gmail.com"];

// create for cicle
for (let i = 0; i < validEmail.length; i ++)    {
    console.log(validEmail[i]);
}