// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array. Stampa l'array alla fine.

let numbers = [];

for (let i = 0; i < 6; i++) {
  let tmp = parseInt(prompt("Inserisci un numero"));

  if (tmp % 2 != 0) {
    numbers.push(tmp);
  }
}

for (let i = 0; i < numbers.length; i++) {
  document.getElementById("result").innerHTML += `
   <li class="list-group-item"> ${numbers[i]} </li>
  `;
}
