
 function sum() {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var sums = parseInt(a) + parseInt(b);
  var answer = "" + a + " + " + b + " = " + sums + ".";
  document.getElementById("mydata").innerHTML = answer;
}

function difference()  {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var diff = parseInt(a) - parseInt(b);
  var answer = "" + a + " - " + b + " = " + diff + ".";
  document.getElementById("mydata").innerHTML = answer;
}

function product()  {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var prod = parseInt(a) * parseInt(b);
  var answer = "" + a + " x " + b + " = " + prod + ".";
  document.getElementById("mydata").innerHTML = answer;
}


function quotient()  {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var quo = parseInt(a) / parseInt(b);
  var answer = "" + a + " ÷ " + b + " = " + quo + ".";
  document.getElementById("mydata").innerHTML = answer;
}

function percentage() {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var per = (parseInt(a) / 100) * parseInt(b);
  var answer = "" + a + "% of " + b + " = " + per + ".";
  document.getElementById("mydata").innerHTML = answer;
}

function modulo() {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var per =parseInt(a) % parseInt(b);
  var answer = "" + a + " mod " + b + " = " + per + ".";
  document.getElementById("mydata").innerHTML = answer;
}

function power() {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var exp = Math.pow(parseInt(a), parseInt(b));
  var answer = "" + a + "<sup>" + b + "</sup>" + " = " + exp + ".";
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
  element:  document.getElementById("mydata").innerHTML,
  parent: document.getElementById("mydata")
})


