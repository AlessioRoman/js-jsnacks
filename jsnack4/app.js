// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
// no alla festa.

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
  document.getElementById("result").innerHTML =
    "Sei invitato alla festa del grande Gatsby";
} else {
  document.getElementById("result").innerHTML = "Non sei stato invitato";
}
