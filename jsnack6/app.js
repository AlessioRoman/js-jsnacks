// Fate generare un numero random da 0 a 10 al computer, e chiedete
// all'utente di inserire un suo numero. Se il numero scelto dall'utente è
// uguale al numero del computer informate l'utente che ha vinto, altrimenti
// ha perso.

const randomNumber = Math.floor(Math.random() * 11);
const userNumber = parseInt(prompt("Inserisci un numero tra 0 e 10"));

if (randomNumber == userNumber) {
  document.getElementById("result").innerHTML = "Complimenti hai vinto";
} else {
  document.getElementById("result").innerHTML = "Mi dispiace hai perso";
}
