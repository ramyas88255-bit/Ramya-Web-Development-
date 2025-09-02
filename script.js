let minutes = 25;

let seconds = 0;

let timer;

let isRunning = false;

function updateDisplay() {

  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');

  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

}

function startTimer() {

  if (isRunning) return;

  isRunning = true;

  timer = setInterval(() => {

    if (seconds === 0) {

      if (minutes === 0) {

        clearInterval(timer);

        isRunning = false;

        document.getElementById("quote").textContent = "Time's up! Take a break.";

        return;

      }

      minutes--;

      seconds = 59;

    } else {

      seconds--;

    }

    updateDisplay();

  }, 1000);

}

function pauseTimer() {

  clearInterval(timer);

  isRunning = false;

}

function resetTimer() {

  clearInterval(timer);

  minutes = 25;

  seconds = 0;

  isRunning = false;

  updateDisplay();

  document.getElementById("quote").textContent = "Stay focused. You got this!";

}

updateDisplay();