let inputArr = [];
var p = document.getElementById("mydata");
var input = document.getElementById("input");

input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("add-btn").click();
  }
});

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
    p.innerHTML = decision + " was chosen!";
  } else {
    p.innerHTML = "No items to choose from :( please add at least 1 item.";
  }
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

