const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let timerId = null;

startBtn.addEventListener("click", onClick);
stopBtn.addEventListener("click", onStoped);

function onClick() {
    startBtn.disabled = true;
    timerId = setInterval(() => {
   document.body.style.backgroundColor = getRandomHexColor();
    },1000);
}

function onStoped() {
    startBtn.disabled = false;
    clearInterval(timerId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }