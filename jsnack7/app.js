const maxNumber = parseInt(prompt("Fino a che numero devo stampare?"));
let counter = 0;

do {
  counter = counter + 2;
  document.getElementById("result").innerHTML += `
   <li class="list-group-item"> ${counter} </li>
  `;
} while (counter < maxNumber && counter < 1000);
