const randomUser = Math.floor(Math.random() * 6) + 1;
const randomComputer = Math.floor(Math.random() * 6) + 1;


if(randomComputer > randomUser) {
    alert('Ha vinto il computer');
}

else if(randomComputer < randomUser) {
    alert('Ha vinto il giocatore')
}

else {
    alert('Pareggio')
}