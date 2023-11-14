const p = document.getElementById("mydata");

function generateNum() {
  return Math.floor(Math.random() * 2);
}
function flip() {

  //call a sub-algorithm to return a random number in [0,2)
  var num = generateNum();
  if (num < 1) {
    p.innerHTML = "HEADS";
  }
  else {
    p.innerHTML = "TAILS";
  }

}

function rollDie() {
  var base = 6;
  const input = document.createElement('input');
  input.type = 'number';
  const button = document.createElement('button');
  const button2 = document.createElement('button');
  button.id = 'setBase';
  button2.id = 'Roll';
  button.innerText = "Set Base";
  button2.innerText = "Roll Die";
  p.innerHTML = "How many sides are on the dice? <br> Default is 6. <br>";
  document.getElementById('mydata').appendChild(input);
  document.getElementById('mydata').appendChild(button);
  document.getElementById('mydata').appendChild(button2);

  button.addEventListener('click', () => {
    base = parseInt(input.value);
  })

  button2.addEventListener('click', () => {
    var num = Math.floor(Math.random() * base);
    num = num + 1;
    p.innerHTML = "You rolled " + num + "!";
  }
  )
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
  element: document.getElementById("mydata").innerHTML,
  parent: document.getElementById("mydata")
})







