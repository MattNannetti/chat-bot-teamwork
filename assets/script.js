let messagesBienvenue = ["Hello !", "Hi !", "What's up ?"];
let messageBienvenueRandom = messagesBienvenue[Math.floor(Math.random() * messagesBienvenue.length)];

document.getElementById("botoutput").innerHTML = messageBienvenueRandom + " Are you feeling well today?";

document.getElementById("submit").addEventListener("click", () => {
    let stringAnswer = document.getElementById("answer").value;
    
    if (stringAnswer.search("yes")) {
        let messagesGood = ["Cool ta vie", "Content pour toi", "Va dormir"];
        let messageGoodRandom = messagesGood[Math.floor(Math.random() * messagesGood.length)];
        console.log(messageGoodRandom);

    } else if (stringAnswer.search("no")) {
        let messagesBad = ["Je m'en fous", "Déso pour toi", "Raconte pas ta vie"];
        let messageBadRandom = messagesBad[Math.floor(Math.random() * messagesBad.length)];
        console.log(messageBadRandom);

    } else {
        for (let i = 0; i <= 3; i++) {
            let messageIncompréhension = "Pas compris";
            console.log(messageIncompréhension);
        } let messageAgressif = "Ecris mieux";
        console.log(messageAgressif);
    }
});
