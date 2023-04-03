const firstWord = prompt("Inserisci la prima parola: ");
const secondWord = prompt("Inserisci la seconda parola: ");

if (firstWord.length > secondWord.length) {
  document.getElementById("result").innerHTML = secondWord + " " + firstWord;
} else if (firstWord.length < secondWord.length) {
  document.getElementById("result").innerHTML = firstWord + " " + secondWord;
} else {
  document.getElementById("result").innerHTML = "Le due parole sono uguali!";
}
