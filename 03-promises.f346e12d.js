var firstDelayField=document.querySelector("input[name='delay']"),delayStepField=document.querySelector("input[name='step']"),amountField=document.querySelector("input[name='amount']"),promisesForm=document.querySelector(".form");function promisesGenerator(e){e.preventDefault();for(var o=Number(firstDelayField.value),t=1;t<=amountField.value;t++)createPromise(t,o).then((function(e){var o=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(e){var o=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),o+=Number(delayStepField.value)}function createPromise(e,o){var t=Math.random()>.3;return new Promise((function(n,r){setTimeout((function(){t?n({position:e,delay:o}):r({position:e,delay:o})}),o)}))}promisesForm.addEventListener("submit",promisesGenerator);
//# sourceMappingURL=03-promises.f346e12d.js.map
