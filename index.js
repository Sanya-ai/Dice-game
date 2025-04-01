

var randomNumber1= Math.floor(Math.random() * 6) + 1; // 1,2,3,4,5,6
var randomNumber2= Math.floor(Math.random() * 6) + 1; // 1,2,3,4,5,6


document.querySelector(".img1").setAttribute('src', `./images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute('src', `./images/dice${randomNumber2}.png`);


// var winner = ( randomNumber1 > randomNumber2 ? 'Player 1 wins' : ( randomNumber1 === randomNumber2 ? 'draw' : 'Player 2 Wins'))
/*if(randomNumber1>randomNumber2) {
    winner="Player 1 wins";
}
else if (randomNumber1<randomNumber2) {
    winner="Player 2 wins";
}
else {
    winner="Draw";
}*/

var winner = randomNumber1 === randomNumber2 ? 'Draw' : `${randomNumber1 > randomNumber2 ? 'Player 1' : 'Player 2'} wins`;

if(randomNumber1 === randomNumber2) {
    // heading. insert()
}

document.querySelector(".heading-text").innerHTML=winner;


