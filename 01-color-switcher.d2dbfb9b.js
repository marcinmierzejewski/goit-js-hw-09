!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("h6c0i");var i=document.querySelector("body"),d=document.querySelector("button[data-start]"),l=document.querySelector("button[data-stop]"),a=null;d.addEventListener("click",(function(){a=setInterval((function(){i.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),r.Notify.info("Change color START!"),l.removeAttribute("disabled"),d.setAttribute("disabled","")})),l.addEventListener("click",(function(){clearInterval(a),d.removeAttribute("disabled"),l.setAttribute("disabled",""),r.Notify.info("Change color STOP!")}))}();
//# sourceMappingURL=01-color-switcher.d2dbfb9b.js.map
