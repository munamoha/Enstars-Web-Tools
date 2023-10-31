// JavaScript code for Task 4
// Learning Objective: designing and use of a sub-algorithm that simulates a die

function myFunction() {
  var p = document.getElementById("mydata");
  var die1 = parseInt(rollDie());
  var die2 = parseInt(rollDie());
  if (die1 == die2) {
    p.innerHTML = "Dice rolls are "+die1+" and "+die2+"";
    alert("DOUBLES!")
  }
  else {
    p.innerHTML = "Dice rolls are "+die1+" and "+die2+"";
  }

}

// a sub-algorithm to return a natural number between 1 and 6 inclusively
// pre-conditions: none
// post-conditions: returns a random natural number in [1,6]
function rollDie() {
  var num = Math.floor(Math.random() * 6);
  num = num + 1;
  return num;
}
