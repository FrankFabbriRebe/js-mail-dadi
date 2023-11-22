// input email user
const email = prompt("Inserisci la tua email");

// array valid email
const validEmail = ["franco@gmail.com", "paolo@gmail.com", "marco@gmail.com"];

// create boolean var to ckeck if the email exist or not
let emailTrovata;

// cicle to check every single elemet of the arry 
for (let i = 0; i < validEmail.length; i++) {
    if (email === validEmail[i]) {
        emailTrovata = true;
    }
}

// console.log result
if (emailTrovata) {
    console.log("Ok, la tua email è stata trovata!");
} else {
    console.log("Errore, la tua email non è stata trovata!");
}

