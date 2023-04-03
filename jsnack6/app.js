const randomNumber = Math.floor(Math.random() * 11);
const userNumber = parseInt(prompt("Inserisci un numero tra 0 e 10"));

if (randomNumber == userNumber) {
  document.getElementById("result").innerHTML = "Complimenti hai vinto";
} else {
  document.getElementById("result").innerHTML = "Mi dispiace hai perso";
}
