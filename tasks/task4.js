let date;
let time;
const p = document.getElementById("mydata");
let allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let hours;
let mins;


function setDate() {
  date = new Date(document.getElementById("calendar").value + "T00:00:00");
  if (document.getElementById("calendar").value == "") {
    p.innerHTML = "No input :( Please input a date.";
  }
  else {
    p.innerHTML = "Your input: " + allDays[date.getDay()] + ", " + allMonths[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + "!";
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

//first give the option to input two seperate dates or use the set one and a new date
function betweenTwo() {
  const button = document.createElement('button');
  const button2 = document.createElement('button');
  button.id = 'setDate';
  button2.id = 'set2Dates';
  button.innerText = "Between Set Date and New Date";
  button2.innerText = "Between Two New Dates";
  p.innerHTML = "Choose to either compare with the set date, or with two different dates.\n";
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
    button3.addEventListener('click', () => {
      calculateDifference(date)
    })
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

    button3.addEventListener('click', () => {
      calculateDifference(date3.value)
    })
  }
  )
}

//calculation for difference of dates
function calculateDifference(date1Input) {
  let date2Input = document.getElementById("second").value;

  //set display element
  let resultElement = document.getElementById("mydata");

  let result = [];

  if (!date1Input || !date2Input) {
    resultElement.textContent = "Please input both dates before clicking the button!!";
  }

  else {
    // Check if the first date includes the time "T00:00:00" to ensure dates are not off
    if (!date1Input.includes("T00:00:00")) {
      // If not present, add it
      date1Input += "T00:00:00";
    }
    // Parse the input dates into Date objects
    // Check if the first date includes the time "T00:00:00" to ensure dates are not off
    if (!date1Input.includes("T00:00:00")) {
      // If not present, add it
      date1Input += "T00:00:00";
    }

    let date1 = new Date(date1Input);
    let date2 = new Date(date2Input + "T00:00:00");

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

//similar logic as above, but for times
function betweenTimes() {
  const button4 = document.createElement('button');
  const button5 = document.createElement('button');
  button4.id = 'setTime';
  button5.id = 'set2Times';
  button4.innerText = "Between Set Time and New Time";
  button5.innerText = "Between Two New Times";
  p.innerHTML = "Choose to either compare with the set times, or with two different times.\n";
  document.getElementById('mydata').appendChild(button4);
  document.getElementById('mydata').appendChild(button5);

  button4.addEventListener('click', () => {
    p.innerHTML = "Set a new time to compare.\n";
    const time2 = document.createElement('input');
    time2.type = "time";
    time2.id = "secondTime";
    document.getElementById('mydata').appendChild(time2);
    const button6 = document.createElement('button');
    button6.id = "select1Time";
    button6.innerHTML = "Calculate Difference";
    document.getElementById('mydata').appendChild(button6);

    button6.addEventListener('click', () => {
      calculateTimeDiff(time)
    })
  })

  button5.addEventListener('click', () => {
    p.innerHTML = "Set two new times to compare.\n";
    const time2 = document.createElement('input');
    time2.type = "time";
    time2.id = "secondTime";
    document.getElementById('mydata').appendChild(time2);
    const time3 = document.createElement('input');
    time3.type = "time";
    time3.id = "thirdTime";
    document.getElementById('mydata').appendChild(time3);
    const button6 = document.createElement('button');
    button6.id = "select1Time";
    button6.innerHTML = "Calculate Difference";
    document.getElementById('mydata').appendChild(button6);

    button6.addEventListener('click', () => {
      calculateTimeDiff(time3.value)
    })
  }
  )
}

function calculateTimeDiff(time1Input) {
  let time2Input = document.getElementById("secondTime").value;
  const time1 = new Date(`${date.toISOString().split('T')[0]}T${time1Input}`);
  const time2 = new Date(`${date.toISOString().split('T')[0]}T${time2Input}`);

  //set display element
  let resultElement = document.getElementById("mydata");
  let result = [];

  if (!time1Input || !time2Input) {
    resultElement.textContent = "Please input both times before clicking the button!!";
  }

  else {
    let difference = Math.abs(time2 - time1);

    let hoursDifference = Math.floor(difference / (1000 * 60 * 60));
    let minutesDifference = Math.floor((difference / (1000 * 60)) % 60);

    if (hoursDifference > 0) {
      result.push(`${hoursDifference} hour${hoursDifference !== 1 ? "s" : ""}`);
    }
    if (minutesDifference > 0) {
      result.push(`${minutesDifference} minute${minutesDifference !== 1 ? "s" : ""}`);
    }

    if (result.length === 0) {
      resultElement.textContent = "No difference between times."
    }
    else {
      resultElement.textContent = `The difference between the two times is ${result.join(", ")}.`;
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
  element: document.getElementById("mydata").innerHTML,
  parent: document.getElementById("mydata")
})
