function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var body=document.querySelector("body"),startBtn=document.querySelector("button[data-start]"),stopBtn=document.querySelector("button[data-stop]"),timerId=null;function changeBackgroundColor(){timerId=setInterval((function(){body.style.backgroundColor=getRandomHexColor()}),1e3),stopBtn.removeAttribute("disabled"),startBtn.setAttribute("disabled","")}function stopInterval(){clearInterval(timerId),startBtn.removeAttribute("disabled"),stopBtn.setAttribute("disabled","")}startBtn.addEventListener("click",changeBackgroundColor),stopBtn.addEventListener("click",stopInterval);
//# sourceMappingURL=01-color-switcher.a76f933b.js.map
