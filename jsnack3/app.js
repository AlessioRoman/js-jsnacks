// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti

const numbers = [];
let sum = 0;

for (let i = 0; i < 10; i++) {
  numbers.push(parseInt(prompt("Inserisci un numero")));
  console.log(numbers[i]);
  sum += numbers[i];
}

document.getElementById("result").innerHTML = sum;
