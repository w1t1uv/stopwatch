const counterElement = document.querySelector('#counter')
const btnStart = document.querySelector('#start')

let counter = 0
let timerID

btnStart.onclick = function () {
	timerID = setInterval(function () {
		counter++
		counterElement.innerText = counter
	}, 1000)
}

const btnPause = document.querySelector('#pause')

btnPause.onclick = function () {
	clearInterval(timerID)
}

const btnReset = document.querySelector('#reset')

btnReset.onclick = function () {
	counter = 0
	counterElement.innerText = counter
	clearInterval(timerID)
}

