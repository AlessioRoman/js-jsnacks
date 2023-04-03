function jsnack1() {
  const firstNumber = parseInt(prompt("Inserisci il primo numero: "));
  const secondNumber = parseInt(prompt("Inserisci il secondo numero: "));

  if (firstNumber > secondNumber) {
    alert(firstNumber);
  } else if (firstNumber < secondNumber) {
    alert(secondNumber);
  } else {
    alert("I due numeri sono uguali");
  }
}

function jsnack2() {
  const firstWord = prompt("Inserisci la prima parola: ");
  const secondWord = prompt("Inserisci la seconda parola: ");

  if (firstWord.length > secondWord.length) {
    alert(secondWord + " " + firstWord);
  } else if (firstWord.length < secondWord.length) {
    alert(firstWord + " " + secondWord);
  } else {
    alert("Le due parole sono uguali!");
  }
}

function jsnack3() {
  const numbers = [];
  let sum = 0;

  for (let i = 0; i < 10; i++) {
    numbers.push(parseInt(prompt("Inserisci un numero")));
    sum += numbers[i];
  }

  alert(sum);
}

function jsnack4() {
  const invitati = [
    "Claudia",
    "Mary",
    "Sara",
    "Valerio",
    "Marika",
    "Bryan",
    "Emanuele",
    "Vincenzo",
  ];
  const researchKey = prompt("Inserisci il tuo nome con la lettera maiuscola");

  const checkInvites = () => {
    for (let i = 0; i <= invitati.length; i++) {
      if (invitati[i] === researchKey) {
        return true;
      }
    }
    return false;
  };

  if (checkInvites()) {
    alert("Sei invitato alla festa del grande Gatsby");
  } else {
    alert("Non sei stato invitato");
  }
}

function jsnack5() {
  let numbers = [];

  for (let i = 0; i < 6; i++) {
    let tmp = parseInt(prompt("Inserisci un numero"));

    if (tmp % 2 != 0) {
      numbers.push(tmp);
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    alert(numbers[i]);
  }
}

function jsnack6() {
  const randomNumber = Math.floor(Math.random() * 11);
  const userNumber = parseInt(prompt("Inserisci un numero tra 0 e 10"));

  if (randomNumber == userNumber) {
    alert("Complimenti hai vinto");
  } else {
    alert("Mi dispiace hai perso");
  }
}

function jsnack7() {
  const maxNumber = parseInt(prompt("Fino a che numero devo stampare?"));
  let counter = 0;

  do {
    counter = counter + 2;
    console.log(counter);
  } while (counter < maxNumber && counter < 1000);
  alert("Apri la console!");
}

function Projects({ title, identifier, description }) {
  return (
    <div className=" text-purpleText bg-purpleBgAlt rounded-lg px-6 py-4 flex flex-wrap flex-col items-start justify-between shadow-lg border border-grey border-opacity-80">
      <div>
        <h1 className="text-white text-2xl font-semibold mb-4">{title}</h1>
        <p className="text-white">{description}</p>
      </div>
      <button
        className="mt-10 p-2 border border-1 rounded-lg hover:bg-purpleText hover:text-purpleBg"
        type="button"
        id={identifier}
        onClick={() => {
          switch (identifier) {
            case "JSnack1":
              jsnack1();
              break;
            case "JSnack2":
              jsnack2();
              break;
            case "JSnack3":
              jsnack3();
              break;
            case "JSnack4":
              jsnack4();
              break;
            case "JSnack5":
              jsnack5();
              break;
            case "JSnack6":
              jsnack6();
              break;
            case "JSnack7":
              jsnack7();
              break;
          }
        }}
      >
        Cliccami!
      </button>
    </div>
  );
}

export default Projects;
