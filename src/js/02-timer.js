import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let selectedUniksDates = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startBtn.setAttribute('disabled', '');
    console.log(selectedDates[0]);
    selectedUniksDates = selectedDates[0].getTime();
    // console.log(selectedUniksDates);
    const actualUniksDates = options.defaultDate.getTime();
    // console.log(actualUniksDates);
    if (actualUniksDates >= selectedUniksDates) {
      window.alert('Please choose a date in the future');
    } else {
      console.log('Start button unlock');
      startBtn.removeAttribute('disabled');
    }
  },
};

const dataTimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

startBtn.addEventListener('click', countDown);

flatpickr(dataTimePicker, options);

function convertMs(ms) {
  console.log('Countdown started');
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function countDown() {
  timerId = setInterval(() => {
    updateDate(convertMs(selectedUniksDates - new Date().getTime()));
  }, 1000);
}

function updateDate(numb) {
  addLeadingZero(dataSeconds, numb.seconds, 2);
  addLeadingZero(dataMinutes, numb.minutes, 2);
  addLeadingZero(dataHours, numb.hours, 2);
  addLeadingZero(dataDays, numb.days, 2);

  if (
    numb.seconds === 0 &&
    numb.minutes === 0 &&
    numb.hours === 0 &&
    numb.days === 0
  ) {
    clearInterval(timerId);
  }
}

function addLeadingZero(dataField, value, length) {
  let valueWithZero = value.toString().padStart(length, '0');
  dataField.innerHTML = valueWithZero;
}