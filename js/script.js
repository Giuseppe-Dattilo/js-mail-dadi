// console.log('JS OK');

/*
ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
*/

/*
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

// ----------------------------------------------------------------

// Esercizio 1

// prendo gli elementi dal DOM
const buttonElement= document.getElementById('start');
const userNumberElement= document.getElementById('user');
const cpuNumberElement= document.getElementById('cpu');
const resultElement= document.getElementById('result');

// creo l'eventlistener sul bottone
buttonElement.addEventListener('click', function(){

     // Genero un numero casuale tra 1 e 6
    const userNumber = Math.floor(Math.random() * 6) + 1;
    const cpuNumber = Math.floor(Math.random() * 6) + 1;

    let result = 'Pari';

    // verifico il vincitore, confrontando il valore dei risultati ottenuti, e stampo in pagina
    if (cpuNumber < userNumber) {
        result = 'Complimenti, hai vinto!';
    } else if (cpuNumber > userNumber) {
        result = 'Mi dispiace, hai perso!' 
    }

    userNumberElement.innerText = userNumber;
    cpuNumberElement.innerText = cpuNumber;
    resultElement.innerText = result;

});


// ----------------------------------------------------------------


// Esercizio 2

// Lista di email che hanno accesso
const emails = [
    'giovanni@boolean.it',
    'giuseppe@boolean.it',
    'luisa@boolean.it'
]

// prendo l'elemento dal DOM
const confirmElement = document.getElementById('confirm');

// creo l'eventlistener sul bottone
confirmElement.addEventListener('click', function(){

    // prendo gli elementi dal DOM
    const emailInput = document.getElementById('email');
    const emailResultElement = document.getElementById('email-result');

    let emailResult = 'la tua email non è corretta';

    // confronto i valori e stampo in pagina
    for (let i = 0; i < emails.length; i++ ){
        if(emailInput.value === emails[i])
        emailResult= 'La tua email è corretta';
    }

    emailResultElement.innerText = emailResult;
    emailInput.value = '';
});