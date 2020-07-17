document.getElementById("botoutput").innerHTML = "Hello";
let msg = new SpeechSynthesisUtterance();
msg.text = "Hello";
window.speechSynthesis.speak(msg);