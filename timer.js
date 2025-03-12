
const timer = document.getElementById('timer')
const btnStart = document.getElementById('start')
const btnStop = document.getElementById('stop')
const btnReset = document.getElementById('reset')
const input = document.querySelector('.input')
let timerId

let timeLeft = 1500 // 1500 секунд = 25 min * 60 seconds


function renderFunction() {
    let minutes = Math.floor(timeLeft / 60)// количество секунд делим на 60 = кол-во минут
    const seconds = timeLeft % 60
    // console.log(minutes, seconds);

    let stringMinutes = minutes.toString()

    if (stringMinutes.length < 2) {
        stringMinutes = '0' + stringMinutes;
    }

    let stringSeconds = seconds.toString()

    if (stringSeconds.length < 2) {
        stringSeconds = '0' + stringSeconds;
    }

    const time = `${stringMinutes} : ${stringSeconds}`
    timer.innerHTML = time

    // console.log(stringMinutes, stringSeconds);
}

function pauseTimer() {
    clearInterval(timerId) // очищаем таймер
    // btnStart.setAttribute('disabled', false)
    btnStart.style.backgroundColor = 'transparent'
    btnStart.removeAttribute('disabled')
}

btnStop.addEventListener('click', function () {
    pauseTimer()
})

function resetTimer() {
    timeLeft = 1500
    pauseTimer()
    renderFunction()
}

btnReset.addEventListener('click', function () {
    resetTimer()
})

btnStart.addEventListener('click', function () {
    if (input.value != '') {
        const minutes = input.value 
        const seconds = minutes*60
        console.log(seconds);
        timeLeft = seconds
    }
    btnStart.setAttribute('disabled', true)
    timerId = setInterval(function () {
        timeLeft = timeLeft - 1
        renderFunction()
        // console.log(timeLeft);
    },
        1000 // 1000 ms = 1 second
    )


})


