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

];

document.getElementById("botoutput").innerHTML = messageBienvenueRandom + " Are you feeling well today?";

document.getElementById("submit").addEventListener("click", function () {
    answerBot()
});

document.getElementById("answer").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        answerBot()
    }
});

function answerBot() {
    document.getElementById("submit").addEventListener("click", () => {
        let stringAnswer = document.getElementById("answer").value;
        if ((stringAnswer.toLowerCase().includes("yes")) && (stringAnswer.toLowerCase().includes("no"))) {
            let messageMitigé = "Choose yes or no?";
            document.getElementById("botoutput").innerHTML = messageMitigé;
            shutDown();
        }
        else if (stringAnswer.toLowerCase().includes("yes")) {
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

        } else if (i < 4) {
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
    });

    function shutDown() {
        let alertRobotMessage = "attention batterie faible";
        let countdown1 = "3";
        let countdown2 = "2";
        let countdown3 = "1";
        let messageFin = "Bye";
        let buttonDisabled = document.getElementById("submit");
        setTimeout(function () {
            let image = document.getElementsByTagName("img")[0];
            image.setAttribute("src", gallery[5]);
            document.getElementById("botoutput").innerHTML = alertRobotMessage;
        }, 2000);
        setTimeout(function () {
            let image = document.getElementsByTagName("img")[0];
            image.setAttribute("src", gallery[3])
            document.getElementById("botoutput").innerHTML = countdown1;
        }, 4000);
        setTimeout(function () {
            let image = document.getElementsByTagName("img")[0];
            image.setAttribute("src", gallery[5]);
            document.getElementById("botoutput").innerHTML = countdown2;
        }, 5000);
        setTimeout(function () { let image = document.getElementsByTagName("img")[0];
            image.setAttribute("src", gallery[3]);
            document.getElementById("botoutput").innerHTML = countdown3;
        }, 6000);
        setTimeout(function () {
            let image = document.getElementsByTagName("img")[0];
            image.setAttribute("src", gallery[5]);
            buttonDisabled.disabled = true;
            document.getElementById("botoutput").innerHTML = messageFin;
        }, 7000);
    }
}
