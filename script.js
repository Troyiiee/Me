function answer(btn, isYes) {
  const feedback = document.getElementById("feedback");
  const buttons = document.querySelectorAll(".btn");
// restart animation
  buttons.forEach(b => b.classList.remove("correct", "wrong"));
  void btn.offsetWidth;

  if (isYes) {
    btn.classList.add("correct");
    feedback.textContent = "I like you too ❤️";

    setTimeout(() => {
        window.location.href = "Date.html";
    }, 2000);
  } else {
    btn.classList.add("wrong");
    feedback.textContent = " Aray koooo!!! 🥺";
  }
}
// Date
function dateAnswer(btn, isYes) {
    const Date = document.getElementById("date");
    const calendarBox = document.getElementById("calendarBox");

    // reset animation every click
  btn.classList.remove("correct", "wrong");
  void btn.offsetWidth;

    if (isYes) {
        btn.classList.add("correct");
        Date.textContent = "Let's schedule it❤️";
        calendarBox.style.display = "block";
    } else {
        btn.classList.add("wrong");
        Date.textContent = "Maybe next time when you are free 🥺";
        calendarBox.style.display = "none";
    }
  }

function scheduleDate() {
  const date = document.getElementById("datePick").value;
  const time = document.getElementById("timePick").value;
  const result = document.getElementById("result");

  if (!date || !time) {
    result.textContent = "Please choose both date and time 📅";
    return;
    } else {
        result.textContent = " ";
    }

    result.textContent = `Our date is set on ${date} at ${time} ❤️`;

    setTimeout(() => {
    window.location.href = "TypeOfDates.html"; // 🔁 change to your next page
    }, 2000);
}
//TypeOfDates
function select(card) {
  // remove active state from all
  document.querySelectorAll(".card")
    .forEach(c => c.classList.remove("active"));

  card.classList.add("active");
}

// type of dates

function select(card, text) {
  // Remove active class
  document.querySelectorAll(".card")
    .forEach(c => c.classList.remove("active"));

  card.classList.add("active");

  showToast(text + " selected");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = "Get choice! Let's Enjoy our time together ❤️";
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}