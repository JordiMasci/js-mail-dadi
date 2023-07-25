const myEmails = [
  "admin@email.it",
  "dev@email.it",
  "boss@email.it",
  "emplay@email.it",
];

const userEmail = prompt("Inserisci la tua email");

let mailInTheList = false;

for (let i = 0; i < myEmails.length; i++) {
  const myEmail = myEmails[i];

  if (myEmail == userEmail) {
    mailInTheList = true;
  }
}

if(mailInTheList == true) {
    alert('Benvenuto ' + userEmail)
    
}
else {
    alert('ACESSO NEGATO')
}
