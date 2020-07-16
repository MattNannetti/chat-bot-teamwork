let messagesBienvenue = ["Hello !", "Hi !", "What's up ?"];
let messageBienvenueRandom = messagesBienvenue[Math.floor(Math.random() * messagesBienvenue.length)];
let i = 0;

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

document.getElementById("botoutput").innerHTML = messageBienvenueRandom + " Are you feeling well today?";

document.getElementById("submit").addEventListener("click", function () {
    answerBot();
});
document.getElementById("answer").addEventListener("keydown", ({
    key
}) => {
    if (key === "Enter") {
        event.preventDefault();
        answerBot();
    }
});



function answerBot() {
    let stringAnswer = document.getElementById("answer").value;
    if ((stringAnswer.toLowerCase().includes("yes")) && (stringAnswer.toLowerCase().includes("no"))) {
        let messageMitigé = "Choose yes or no?";
        document.getElementById("botoutput").innerHTML = messageMitigé;

    } else if (stringAnswer.toLowerCase().includes("yes")) {
        let messagesGood = ["Cool story bro", "Urgh... great..", "Noice"];
        let messageGoodRandom = messagesGood[Math.floor(Math.random() * messagesGood.length)];
        document.getElementById("botoutput").innerHTML = messageGoodRandom;
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[1]);
        shutDown();

    } else if (stringAnswer.toLowerCase().includes("no")) {
        let messagesBad = ["Not interested", "I don't care, sorry", "Booooooooring"];
        let messageBadRandom = messagesBad[Math.floor(Math.random() * messagesBad.length)];
        document.getElementById("botoutput").innerHTML = messageBadRandom;
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[2]);
        shutDown();

    } else if (i < 3) {
        i++;
        let messageIncompréhension = "I didn't get that..";
        document.getElementById("botoutput").innerHTML = messageIncompréhension;
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[4]);

    } else {
        let messageAgressif = "Did you spell that right?";
        document.getElementById("botoutput").innerHTML = messageAgressif;
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[3]);
        shutDown();
    }
}

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
    }, 2000);
    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[6])
        document.getElementById("botoutput").innerHTML = countdown1;
    }, 5100);
    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[7]);
        document.getElementById("botoutput").innerHTML = countdown2;
    }, 6500);
    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[8]);
        document.getElementById("botoutput").innerHTML = countdown3;
    }, 8000);
    setTimeout(function () {
        let image = document.getElementsByTagName("img")[0];
        image.setAttribute("src", gallery[5]);
        buttonDisabled.disabled = true;
        document.getElementById("botoutput").innerHTML = messageFin;
    }, 9500);
}

let a = 0;
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