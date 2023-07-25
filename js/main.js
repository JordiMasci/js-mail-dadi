const randomUser = Math.floor(Math.random() * 6) + 1;
const randomComputer = Math.floor(Math.random() * 6) + 1;

const userToss = document.getElementById('user-toss')
const computerToss = document.getElementById('computer-toss')
const Winner = document.getElementById('winner')

let winnerText

if(randomComputer > randomUser) {
    // alert('Ha vinto il computer');
    winnerText = 'Ha vinto il computer';
}

else if(randomComputer < randomUser) {
    // alert('Ha vinto il giocatore')
    winnerText = 'Ha vinto il giocatore';
}

else {
    // alert('Pareggio')
    winnerText = 'Pareggio';
}

userToss.innerHTML = randomUser;
computerToss.innerHTML = randomComputer;
Winner.innerText = winnerText;