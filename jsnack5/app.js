let numbers = [];

for (let i = 0; i < 6; i++) {
  let tmp = parseInt(prompt("Inserisci un numero"));

  if (tmp % 2 != 0) {
    numbers.push(tmp);
  }
}

for (let i = 0; i < numbers.length; i++) {
  document.getElementById("result").innerHTML += toString.numbers[i];
}
