// Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
// Modificate poi il programma in modo che venga chiesto all'utente il
// numero massimo consentito, e stampare tutta la tabellina del 2 fino al
// numero inserito

const maxNumber = parseInt(prompt("Fino a che numero devo stampare?"));
let counter = 0;

do {
  counter = counter + 2;
  document.getElementById("result").innerHTML += `
   <li class="list-group-item"> ${counter} </li>
  `;
} while (counter < maxNumber && counter < 1000);
