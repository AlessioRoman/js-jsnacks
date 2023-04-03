function jsnack1() {
  const firstNumber = parseInt(prompt("Inserisci il primo numero: "));
  const secondNumber = parseInt(prompt("Inserisci il secondo numero: "));

  if (firstNumber > secondNumber) {
    document.getElementById("result").innerHTML = firstNumber;
  } else if (firstNumber < secondNumber) {
    document.getElementById("result").innerHTML = secondNumber;
  } else {
    document.getElementById("result").innerHTML = "I due numeri sono uguali";
  }
}

function jsnack2() {
  console.log(hi);
}

function jsnack3() {
  console.log(hi);
}

function jsnack4() {
  console.log(hi);
}

function jsnack5() {
  console.log(hi);
}

function jsnack6() {
  console.log(hi);
}

function jsnack7() {
  console.log(hi);
}

function Projects({ title, identifier, description }) {
  return (
    <div className=" text-purpleText bg-purpleBgAlt w-1/5 rounded-lg px-6 py-4 flex flex-col items-start justify-between shadow-lg border border-grey border-opacity-80">
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
