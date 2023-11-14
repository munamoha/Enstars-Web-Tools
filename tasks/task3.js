let a = 0;
let b = 0;
function set() {
  a = document.getElementById("num1").value;
  b = document.getElementById("num2").value;
  document.getElementById("mydata").innerHTML = "Set Numbers: " + a + " and " + b;
}

function swap() {
  var temp = a;
  a = b;
  b = temp;
  document.getElementById("num1").innerHTML = a;
  document.getElementById("num2").innerHTML = b;
  document.getElementById("mydata").innerHTML = "Set Numbers: " + a + " and " + b;
}

function sum() {
  var sums = parseFloat(a) + parseFloat(b);
  var answer = "" + a + " + " + b + " = " + sums;
  document.getElementById("mydata").innerHTML = answer;
}

function difference() {
  var diff = parseFloat(a) - parseFloat(b);
  var answer = "" + a + " - " + b + " = " + diff;
  document.getElementById("mydata").innerHTML = answer;
}

function product() {
  var prod = parseFloat(a) * parseFloat(b);
  var answer = "" + a + " x " + b + " = " + prod;
  document.getElementById("mydata").innerHTML = answer;
}


function quotient() {
  var quo = parseFloat(a) / parseFloat(b);
  var answer = "" + a + " ÷ " + b + " = " + quo;
  document.getElementById("mydata").innerHTML = answer;
}

function percentage() {
  var per = (parseFloat(a) / 100) * parseFloat(b);
  var answer = "" + a + "% of " + b + " = " + per;
  document.getElementById("mydata").innerHTML = answer;
}

function modulo() {
  var per = parseFloat(a) % parseFloat(b);
  var answer = "" + a + " mod " + b + " = " + per;
  document.getElementById("mydata").innerHTML = answer;
}

function power() {
  var exp = Math.pow(parseFloat(a), parseFloat(b));
  var answer = "" + a + "<sup>" + b + "</sup>" + " = " + exp;
  document.getElementById("mydata").innerHTML = answer;
}

function nthroot() {
  var root = Math.pow(parseFloat(a), (1 / parseFloat(b)));
  var answer = "" + a + " with root " + b + " = " + root;
  document.getElementById("mydata").innerHTML = answer;
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


