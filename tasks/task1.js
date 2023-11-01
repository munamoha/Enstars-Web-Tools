
function generateNum() {
  return Math.floor(Math.random()*2);
}
function flip() {
  var p = document.getElementById("mydata");

  //call a sub-algorithm to return a random number in [0,2)
  var num = generateNum();
  if (num < 1) {
    p.innerHTML = "HEADS";
  }
  else {
    p.innerHTML = "TAILS";
  }

}

function rollDice() {
  var p = document.getElementById("mydata");
  var die1 = parseInt(rollDie());
  var die2 = parseInt(rollDie());
  if (die1 == die2) {
    p.innerHTML = "Doubles! Dice rolls are "+die1+" and "+die2+"";
  }
  else {
    p.innerHTML = "Dice rolls are "+die1+" and "+die2+"";
  }

}

function rollDie() {
  var num = Math.floor(Math.random() * 6);
  num = num + 1;
  return num;
}






