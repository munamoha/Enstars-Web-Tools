let inputArr = [];
var p = document.getElementById("mydata");



function addtoList() {

  var text = document.getElementById("input").value;
  inputArr.push(text);
  var item = "<li>" + text + "</li>";
  document.getElementById("list").insertAdjacentHTML('beforeend', item);
  document.getElementById("input").value = ""; // clear the value 
}


function pick() {
  if (inputArr.length > 0) {
    var decision = inputArr[Math.floor(Math.random() * inputArr.length)];
    p.innerHTML = decision;
  } else {
    p.innerHTML = "No items to choose from.";
  }
}
