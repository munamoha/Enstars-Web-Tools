

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




