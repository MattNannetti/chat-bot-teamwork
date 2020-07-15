let messagesBienvenue = ["Hello !", "Hi !", "What's up ?"];
let messageBienvenueRandom = messagesBienvenue[Math.floor(Math.random() * messagesBienvenue.length)];

document.getElementById("botoutput").innerHTML = messageBienvenueRandom + " Are you feeling well today?";

document.getElementById("submit").addEventListener("click", () => {
    let stringAnswer = document.getElementById("answer").value;
    if ((stringAnswer.includes("yes")) && (stringAnswer.includes("no"))) {
        let messageMitigé="Choose yes or no?";
        document.getElementById("botoutput").innerHTML = messageMitigé;
    }
    else if (stringAnswer.includes("yes")) {
        let messagesGood = ["Cool ta vie", "Content pour toi", "Va dormir"];
        let messageGoodRandom = messagesGood[Math.floor(Math.random() * messagesGood.length)];
        document.getElementById("botoutput").innerHTML = messageGoodRandom;

    } else if (stringAnswer.includes("no")) {
        let messagesBad = ["Je m'en fous", "Déso pour toi", "Raconte pas ta vie"];
        let messageBadRandom = messagesBad[Math.floor(Math.random() * messagesBad.length)];
        document.getElementById("botoutput").innerHTML = messageBadRandom;

    } else {
        for (let i = 0; i <= 3; i++) {
            let messageIncompréhension = "Pas compris";
            document.getElementById("botoutput").innerHTML = messageIncompréhension;
        } let messageAgressif = "Ecris mieux";
        document.getElementById("botoutput").innerHTML = messageAgressif;
    }
});
