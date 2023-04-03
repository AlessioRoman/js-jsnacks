const numbers = [];
let sum = 0;

for (let i = 0; i < 10; i++) {
  numbers.push(parseInt(prompt("Inserisci un numero")));
  console.log(numbers[i]);
  sum += numbers[i];
}

document.getElementById("result").innerHTML = sum;
