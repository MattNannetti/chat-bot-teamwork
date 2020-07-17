//Variables
let messagesBienvenue = ["Oh no, an another one..", "I'm pretty busy!", "What do you want ?"];
let messageBienvenueRandom = messagesBienvenue[Math.floor(Math.random() * messagesBienvenue.length)];
let i = 0;
let a = 0;

//Images
const gallery = [
    "assets/images/robot_neutral.png",
    "assets/images/robot_happy.png",
    "assets/images/robot_mad.png",
    "assets/images/robot_meh.png",
    "assets/images/robot_question.png",
    "assets/images/robot_dead.png",
    "assets/images/robot_3.png",
    "assets/images/robot_2.png",
    "assets/images/robot_1.png",
    "assets/images/robot_power.png",
    "assets/images/robot_power0.png",
    "assets/images/robot_power1.png",
    "assets/images/robot_power2.png",
    "assets/images/robot_power3.png",
];

//Message bienvenue random
document.getElementById("botoutput").innerHTML = messageBienvenueRandom + " You're doing ok?";
robottalk(messageBienvenueRandom + "You're doing ok?");

//Appel fonction principale au clic et Enter
document.getElementById("submit").addEventListener("click", answerBot);
document.getElementById("answer").addEventListener("keydown", ({
    key
}) => {
    if (key === "Enter") {
        event.preventDefault();
        answerBot();
    }
});

// TEXT TO SPEECH function
function robottalk (speech){
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[2]; 
msg.voiceURI = 'native';
msg.volume = 1; 
msg.rate = 1; 
msg.pitch = 2; 
msg.text = speech;
msg.lang = 'en-US';
speechSynthesis.speak(msg);
}

//Fonction principale : réponses du robot en fonction de l'utilisateur
function answerBot() {
    let stringAnswer = document.getElementById("answer").value;
    if ((stringAnswer.toLowerCase().includes("yes")) && (stringAnswer.toLowerCase().includes("no"))) {
        let messageMitigé = "Choose yes or no?";
        document.getElementById("botoutput").innerHTML = messageMitigé;

    } else if (stringAnswer.toLowerCase().includes("yes")) {
        let messagesGood = ["Cool story bro", "Ok", "Cool"];
        let messageGoodRandom = messagesGood[Math.floor(Math.random() * messagesGood.length)];
        document.getElementById("botoutput").innerHTML = messageGoodRandom;
        robottalk(messageGoodRandom);
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[1]);
        //shutDown();

    } else if (stringAnswer.toLowerCase().includes("no")) {
        let messagesBad = ["Not interested", "I don't really care", "Boring"];
        let messageBadRandom = messagesBad[Math.floor(Math.random() * messagesBad.length)];
        robottalk(messageBadRandom);
        document.getElementById("botoutput").innerHTML = messageBadRandom;
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[2]);
        //shutDown();

    } else if (i < 3) {
        i++;
        let messageIncompréhension = "I didn't understand please be clear";
        document.getElementById("botoutput").innerHTML = messageIncompréhension;
        robottalk(messageIncompréhension);
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[4]);

    } else {
        let messageAgressif = "I don't have the time for this. Go back to school!";
        document.getElementById("botoutput").innerHTML = messageAgressif;
        robottalk(messageAgressif);
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[3]);
        //shutDown();
    }
}

//Fonction extinction robot : messages, images, sons
function shutDown() {
    let alertRobotMessage = "WARNING! Low battery!";
    let countdown1 = "3";
    let countdown2 = "2";
    let countdown3 = "1";
    let messageFin = "Bye";
    let buttonDisabled = document.getElementById("submit");

    setTimeout(function () {
        batterieVideImage();
        document.getElementById("botoutput").innerHTML = alertRobotMessage;
        let myAudio1 = new Audio("assets/sounds/robot_battery.mp3");
        myAudio1.play();
    }, 2000);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[6])
        document.getElementById("botoutput").innerHTML = countdown1;
        let myAudio2 = new Audio("assets/sounds/robot_blip.mp3");
        myAudio2.play();
    }, 5100);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[7]);
        document.getElementById("botoutput").innerHTML = countdown2;
        let myAudio2 = new Audio("assets/sounds/robot_blip.mp3");
        myAudio2.play();
    }, 6500);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[8]);
        document.getElementById("botoutput").innerHTML = countdown3;
        let myAudio2 = new Audio("assets/sounds/robot_blip.mp3");
        myAudio2.play();
    }, 8000);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[5]);
        buttonDisabled.disabled = true;
        document.getElementById("botoutput").innerHTML = messageFin;
        let myAudio3 = new Audio("assets/sounds/dying_robot.mp3");
        myAudio3.play();
    }, 9500);
}

//Animation batterie vide
function batterieVideImage() {
    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[13]);
    }, 0000);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[12]);
    }, 0200);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[11]);
    }, 0600);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[10]);
    }, 0800);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[9]);
    }, 1000);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[13]);
    }, 1200);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[12]);
    }, 1400);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[11]);
    }, 1600);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[10]);
    }, 1800);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[9]);
    }, 2000);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[13]);
    }, 2200);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[12]);
    }, 2400);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[11]);
    }, 2600);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[10]);
    }, 2800);

    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[9]);
    }, 3000);
}