const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const resetButton = document.querySelector(".reset");

let totalSeconds = 0;
let interval;

function startTimer() {
  interval = setInterval(() => {
    totalSeconds++;
    const hoursValue = Math.floor(totalSeconds / 3600);
    const minutesValue = Math.floor((totalSeconds % 3600) / 60);
    const secondsValue = totalSeconds % 60;
    hours.innerText = hoursValue < 10 ? "0" + hoursValue : hoursValue;
    minutes.innerText =
      minutesValue < 10 ? "0" + minutesValue : minutesValue;
    seconds.innerText =
      secondsValue < 10 ? "0" + secondsValue : secondsValue;
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  totalSeconds = 0;
  hours.innerText = "00";
  minutes.innerText = "00";
  seconds.innerText = "00";
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
