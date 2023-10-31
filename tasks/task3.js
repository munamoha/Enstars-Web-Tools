// JavaScript code for Task 3
// Learning Objective 1: use of a sub-algorithm with one parameter
// Learning Objective 2: use of a for loop

function addSum(num) {
  var p = document.getElementById("mydata");
  var result = parseInt(mySum(num));
  p.innerHTML = "Result = "+result+"";
}

// a sub-algorithm to return sum of natural numbers up to num
// pre-conditions: num belongs to Natural numbers >= 0
// post-conditions: returns sum of all natural numbers less than or equal to num
function mySum(num) {
  let sum = 0;
 for (let i = 1; i <= num; i++) {
   sum += i;
  }
  return sum;

}

