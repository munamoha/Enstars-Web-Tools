
function generateNum() {
  return Math.floor(Math.random()*2);
}
function myFunction() {
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







