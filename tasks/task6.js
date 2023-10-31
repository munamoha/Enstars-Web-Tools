// JavaScript code for Task 6
// Learning Objective: working with global variable

var i = 21;   // i is a global variable

function myFunction() {
  var p = document.getElementById("mydata");

  //call a sub-algorithm that counts down to zero
  p.innerHTML = counter();
}

// a sub-algorithm to count down from the initial value of a global variable
// pre-conditions: i belongs to N
// post-conditions: returns i-1 if i>1; otherwise returns BOOM!
function counter() {
  // i is the global variable defined above in line 4
  /* TODO 1: write an if statements that decrements i and returns it if i>1; otherwise, return BOOM! */
  i--;
  if (i >= 0) {
  return i;
}
else {
  return "BOOM!";
}
}
