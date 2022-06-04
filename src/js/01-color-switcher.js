import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const notifyOptions = {
  opacity: 0.9,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

startBtn.addEventListener('click', changeBackgroundColor);
stopBtn.addEventListener('click', stopInterval);

function changeBackgroundColor() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  Notify.info('Change color START!', notifyOptions);
  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', '');
}

function stopInterval() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', '');
  Notify.info('Change color STOP!', notifyOptions);
}
