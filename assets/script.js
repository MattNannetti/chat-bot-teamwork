let messagesBienvenue = ["Hello !", "Hi !", "What's up ?"];
let messageBienvenueRandom = messagesBienvenue[Math.floor(Math.random() * messagesBienvenue.length)];

document.getElementById("botoutput").innerHTML = messageBienvenueRandom + " Are you feeling well today?";

document.getElementById("btnSubmit").addEventListener("click", function () {
    answerBot()
});

document.getElementById("userMessage").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        answerBot()
    }
});

function answerBot(){
    let stringAnswer = document.getElementById("answer").value;
    if ((stringAnswer.toLowerCase().includes("yes")) && (stringAnswer.toLowerCase().includes("no"))) {
        let messageMitigé = "Choose yes or no?";
        document.getElementById("botoutput").innerHTML = messageMitigé;
    }
    else if (stringAnswer.toLowerCase().includes("yes")) {
        let messagesGood = ["Cool story bro", "Urgh... great..", "Noice"];
        let messageGoodRandom = messagesGood[Math.floor(Math.random() * messagesGood.length)];
        document.getElementById("botoutput").innerHTML = messageGoodRandom;
        setTimeout(function () {
            let messageFin = "Bye";
            let buttonDisabled = document.getElementById("submit");
            buttonDisabled.disabled = true;
            document.getElementById("botoutput").innerHTML = messageFin;
        }, 3000);

    } else if (stringAnswer.toLowerCase().includes("no")) {
        let messagesBad = ["Not interested", "I don't care, sorry", "Booooooooring"];
        let messageBadRandom = messagesBad[Math.floor(Math.random() * messagesBad.length)];
        document.getElementById("botoutput").innerHTML = messageBadRandom;

    } else {
        let i = 0,
        if (i <= 3) {
            i++;
            let messageIncompréhension = "I didn't get that..";
            document.getElementById("botoutput").innerHTML = messageIncompréhension;
        } else {
            let messageAgressif = "Did you spell that right?";
            document.getElementById("botoutput").innerHTML = messageAgressif;
        }
    }
}
