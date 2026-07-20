const timer = document.getElementById("timer");
const startStopBtn = document.getElementById("startStopBtn");
const reset = document.getElementById("resetBtn");

let second = 0;
let minute = 0;
let hour = 0;
let interval = null;
let isRunning = false;

function formatnumber(num) {
  return num < 10 ? "0" + num : num;
}

function updateDisplay() {
  timer.innerHTML =
    formatnumber(hour) +
    ":" +
    formatnumber(minute) +
    ":" +
    formatnumber(second);
}

function tick() {
  second++;
//   console.log(`second : ${second}`);
  if (second === 60) {
    second = 0;
    minute++;
    console.log(`minute : ${minute}`);

    if (minute === 60 ) {
      minute = 0;
      hour++;
    }
  }
  updateDisplay()
}
// window.setInterval(tick, 1000)

function resetNow (){
    second = 0;
    minute = 0;
    hour = 0;

    updateDisplay()
    clearInterval(interval)
    isRunning=false
    console.log('reStarted!')
}

// let interval = setInterval(tick, 1000)

startStopBtn.addEventListener("click", ()=>{
    // interval = setInterval(tick, 1000)
    if(isRunning){
        isRunning = false;
        clearInterval(interval)
        console.log('stoped')
    }else{
        interval = setInterval(tick, 1000)
        isRunning = true;
    }
});
reset.addEventListener('click', resetNow)


