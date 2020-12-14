function rollDice(){
    let goldCoins='0';
    for(i=0; i<10; i++){
    const roll = Math.floor(Math.random()*7 + 1);
    alert('The dice roll number is' + roll);
    if (i === 1) {
        alert("Game over, no more rolls!");
        break;
    }
    if (i < 5){
        continue;
    }
    if ( i ==5){
        alert("Congratulations, you win 5 gold coins!");
    }
    if ( i ==6){
        alert("Congratulations, you win 6 gold coins!");
    }
    goldCoins=roll;
    }
  alert("COngratulations, you have won " + goldCoins +" goldcoins in total");

}