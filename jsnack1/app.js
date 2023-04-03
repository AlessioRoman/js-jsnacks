const firstNumber = parseInt(prompt("Inserisci il primo numero: "));
const secondNumber = parseInt(prompt("Inserisci il secondo numero: "));

if (firstNumber > secondNumber) {
  document.getElementById("result").innerHTML = firstNumber;
} else if (firstNumber < secondNumber) {
  document.getElementById("result").innerHTML = secondNumber;
} else {
  document.getElementById("result").innerHTML = "I due numeri sono uguali";
}
