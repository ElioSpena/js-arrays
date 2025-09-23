// 1. Crea un array vuoto. Genera 6 numeri casuali compresi tra 1 e 100, inserisci nel array solo i numeri dispari.

let randomNum = [];

for (let i = 1; randomNum.length < 6; i++) {

    const randomGenerator = Math.floor(Math.random() * 100) + 1;

    if (randomGenerator % 2 !== 0) {
        randomNum.push(randomGenerator);
    }
}

console.log(randomNum);

// 2. Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

const intNum = [10, 25, 16, 44, 32, 64];
let sum = 0;

for (let i = 0; i < intNum.length; i++) {

    if (i % 2 !== 0) {
        sum += intNum[i];
    }

}

console.log(sum);

// 3. Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

const userNumber = prompt("Scrivi un numero di 4 cifre:", 5434);

const userNumberAsArray = userNumber.split("");
let userNumberSum = 0;

for (let i = 0; i < userNumberAsArray.length; i++) {
    userNumberSum += parseInt(userNumberAsArray[i]);

}

console.log(userNumberSum);

// 4. Calcola la somma e la media dei primi 10 numeri.

const numbers = [];
let meanNum = 0;

for (let i = 1; i <= 10; i++) {

    numbers.push(i);
    meanNum = (numbers.length * i) / 10;

}
console.log(meanNum);


// 5. Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome

const names = ["Jeff", "Tom", "Lily", "Hannah", "Robert"];
const surnames = ["Grossman", "Peters", "Johnson", "Potter", "Draper"];


let randomInvited = [];

for (let i = 0; i < 10; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const fullName = `${randomName} ${randomSurname}`;
    randomInvited.push(fullName);
}

console.log(randomInvited);