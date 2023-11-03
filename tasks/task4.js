let date = new Date();
let time;
let p = document.getElementById("mydata");
let allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function setDate() {
  date = new Date(document.getElementById("calendar").value+"T00:00:00");
  if (document.getElementById("calendar").value == "") {
    p.innerHTML = "No input :( Please input a date.";
  }
  else {
    p.innerHTML = "Your input: " + allDays[date.getDay()] + ", " + allMonths[date.getMonth()] + " " + date.getDate() + ", "  + date.getFullYear() + "!";
  }
}


function setTime() {
  time = document.getElementById("time").value;
  if (time == "") {
    p.innerHTML = "No input :( Please input a time.";
  }
  else {
    p.innerHTML = time;
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
  element:  document.getElementById("mydata").innerHTML,
  parent: document.getElementById("mydata")
})
