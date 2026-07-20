const timer = document.getElementById("timer");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

let second = 0;
let minute = 0;
let hour = 0;

let interval = null;
let isRunning = false;

function timerValue(num) {
  return num < 10 ? "0" + num : num;
}

function updateDisplaly() {
  timer.innerHTML = `${timerValue(hour)}:${timerValue(minute)}:${timerValue(second)}`;
}

function tick() {
  second++;
  if (second === 60) {
    second = 0;
    minute++;

    if (minute === 60) {
      minute = 0;
      hour++;
    }
  }
  updateDisplaly();
}

function reset() {
  second = 0;
  minute = 0;
  hour = 0;

  clearInterval(interval);
  isRunning = false;
  startStopBtn.innerHTML = 'Start'
  updateDisplaly();
}

startStopBtn.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
    startStopBtn.innerHTML = 'Start'
  } else {
    interval = setInterval(tick, 1000);
    isRunning = true;
    startStopBtn.innerText = 'Stop'
  }
});

resetBtn.addEventListener("click", reset);
