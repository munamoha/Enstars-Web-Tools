
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
    p.innerHTML = "Doubles! You rolled "+die1+" and "+die2+"";
  }
  else {
    p.innerHTML = "You rolled "+die1+" and "+die2+"";
  }

}

function rollDie() {
  var num = Math.floor(Math.random() * 6);
  num = num + 1;
  return num;
}

const isOverflown = ({ clientHeight, scrollHeight }) => scrollHeight > clientHeight;

const resizeText = ({ element, parent }) => {
  let i = 12 // let's start with 12px
  let overflow = false
  const maxSize = 128 // very huge text size

  while (!overflow && i < maxSize) {
    element.style.fontSize = `${i}px`
    overflow = isOverflown(parent)
    if (!overflow) i++
  }

  // revert to last state where no overflow happened:
  element.style.fontSize = `${i - 1}px`
}


resizeText({
  element:  document.getElementById("mydata").innerHTML,
  parent: document.getElementById("mydata")
})







