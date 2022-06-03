const firstDelayField = document.querySelector("input[name='delay']");
const delayStepField = document.querySelector("input[name='step']");
const amountField = document.querySelector("input[name='amount']");
const promisesForm = document.querySelector('.form');

promisesForm.addEventListener('submit', promisesGenerator);

function promisesGenerator(e) {
  e.preventDefault();
  let delay = Number(firstDelayField.value);
  for (let position = 1; position <= amountField.value; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += Number(delayStepField.value);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
