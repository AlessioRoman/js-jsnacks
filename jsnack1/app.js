// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const firstNumber = parseInt(prompt("Inserisci il primo numero: "));
const secondNumber = parseInt(prompt("Inserisci il secondo numero: "));

if (firstNumber > secondNumber) {
  document.getElementById("result").innerHTML = firstNumber;
} else if (firstNumber < secondNumber) {
  document.getElementById("result").innerHTML = secondNumber;
} else {
  document.getElementById("result").innerHTML = "I due numeri sono uguali";
}
