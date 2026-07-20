// // button variable
// const startStopBtn = document.getElementById('startStopBtn')
// const resetBtn = document.getElementById('resetBtn')

// console.log(startStopBtn, resetBtn)

// // variable for time avlues
// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// startStopBtn.addEventListener('click',()=>{
//     // window.setInterval(stopWatch, 1000)
// })

// // stop watch function
// function stopWatch(){
//     seconds ++;

//     if(seconds / 60 === 1){
//         seconds = 0;
//         minutes ++;

//         if(minutes / 60 === 1){
//             minutes = 0;
//             hours ++;
//         }
//     }

//     let displayTimer = document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds
// }

// window.setInterval(stopWatch, 1000)

// ── Step 1: grab elements from the DOM ──
        const timerDisplay = document.getElementById('timer')
        const startStopBtn = document.getElementById('startStopBtn')
        const resetBtn     = document.getElementById('resetBtn')

        // ── Step 2: variables to track state ──
        let interval  = null   // will hold our setInterval
        let isRunning = false  // is the stopwatch running?
        let hours     = 0
        let minutes   = 0
        let seconds   = 0

        // ── Step 3: format numbers to always show 2 digits ──
        // 9 → "09",  45 → "45"
        function formatNumber(num) {
            return num < 10 ? '0' + num : num
        }

        // ── Step 4: update the display ──
        function updateDisplay() {
            timerDisplay.textContent =
                formatNumber(hours) + ':' +
                formatNumber(minutes) + ':' +
                formatNumber(seconds)
        }

        // ── Step 5: tick — runs every 1 second ──
        function tick() {
            seconds++

            if (seconds === 60) {
                seconds = 0
                minutes++
            }

            if (minutes === 60) {
                minutes = 0
                hours++
            }

            updateDisplay()
        }

        // ── Step 6: Start/Stop button ──
        startStopBtn.addEventListener('click', function() {
            if (isRunning) {
                // currently running → STOP it
                clearInterval(interval)
                isRunning = false
                startStopBtn.textContent = 'Start'
            } else {
                // currently stopped → START it
                interval = setInterval(tick, 10)
                isRunning = true
                startStopBtn.textContent = 'Stop'
            }
        })

        // ── Step 7: Reset button ──
        resetBtn.addEventListener('click', function() {
            clearInterval(interval)  // stop the timer
            isRunning = false        // mark as not running
            hours     = 0            // reset all values
            minutes   = 0
            seconds   = 0
            updateDisplay()          // show 00:00:00
            startStopBtn.textContent = 'Start'
        })