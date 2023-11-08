let date = new Date();
let time;
let timeValues = [];
let p = document.getElementById("mydata");
let allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let hours;
let mins;


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
    p.innerHTML = "Your input: " + time + "!";
  }
}

function betweenTwo() {
 const button = document.createElement('button');
 const button2 = document.createElement('button');
 button.id = 'setDate';
 button2.id = 'set2Dates';
 button.innerText = "Between Set Date and New Date";
 button2.innerText = "Between Two New Dates";
p.innerHTML = "Choose to either compare with the set date, or with two different dates.";
document.getElementById('mydata').appendChild(button);
document.getElementById('mydata').appendChild(button2);

 button.addEventListener('click', () => {
  p.innerHTML = "Set a new date to compare.\n";
  const date2 = document.createElement('input');
  date2.type = "date";
  date2.id = "second";
  document.getElementById('mydata').appendChild(date2);
  const button3 = document.createElement('button');
  button3.id = "select1";
  button3.innerHTML = "Calculate Difference";
  document.getElementById('mydata').appendChild(button3);

  button3.addEventListener('click',  () => {
    calculateDifference(date)
  } )
})

button2.addEventListener('click', () => {
  p.innerHTML = "Set two new dates to compare.\n";
  const date2 = document.createElement('input');
  date2.type = "date";
  date2.id = "second";
  document.getElementById('mydata').appendChild(date2);
  const date3 = document.createElement('input');
  date3.type = "date";
  date3.id = "third";
  document.getElementById('mydata').appendChild(date3);
  const button3 = document.createElement('button');
  button3.id = "select1";
  button3.innerHTML = "Calculate Difference";
  document.getElementById('mydata').appendChild(button3);

  button3.addEventListener('click',  () => {
    calculateDifference(date3.value+"T00:00:00")
  } )
}

)


}

function calculateDifference(date1Input) {
  let date2Input = document.getElementById("second").value;

  //set display element
  let resultElement = document.getElementById("mydata");

  let result = [];

  if (!date2Input) {
    resultElement.textContent = "Please input a date before clicking the button!!";
  }

  else {
    // Parse the input dates into Date objects
    let date1 = new Date(date1Input);
    let date2 = new Date(document.getElementById("second").value+"T00:00:00");

    // Calculate the time difference in milliseconds
    let difference = Math.abs(date2 - date1);

    // Convert milliseconds to days
    let daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

    // Convert days
    let yearsDifference = Math.floor(daysDifference / 365);
    let monthsDifference = Math.floor((daysDifference % 365) / 30);
    let remainingDays = Math.floor(daysDifference % 30);


  if (yearsDifference > 0) {
      result.push(`${yearsDifference} year${yearsDifference !== 1 ? "s" : ""}`);
    }
    if (monthsDifference > 0) {
      result.push(`${monthsDifference} month${monthsDifference !== 1 ? "s" : ""}`);
    }
    if (remainingDays > 0) {
      result.push(`${remainingDays} day${remainingDays !== 1 ? "s" : ""}`);
    }

    if (result.length === 0) {
      resultElement.textContent = "The dates are the same.";
    } else {
      resultElement.textContent = `The difference between the two dates is ${result.join(", ")}.`;
    }
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
