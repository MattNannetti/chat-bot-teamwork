let messagesBienvenue = ["Bonjour", "Salut", "Coucou"];
let messageBienvenueRandom = messagesBienvenue[Math.floor(Math.random() * messagesBienvenue.length)];

document.getElementById("!!!!!!!").innerHTML = messageBienvenueRandom;
document.getElementById("!!!!!!!").innerHTML = "Are you feeling well today ?";

let inputstring = "renard computer, écran";
if (inputstring.search("yes") && !inputstring.search("no")) {
    let messagesGood = ["Cool ta vie", "Content pour toi", "Va dormir"];
    let messageGoodRandom = messagesGood[Math.floor(Math.random() * messagesGood.length)];
    console.log(messageGoodRandom);
} else if (inputstring.search("no") && !inputstring.search("no")) {
    let messagesBad = ["Je m'en fous", "Déso pour toi", "Raconte pas ta vie"];
    let messageBadRandom = messagesBad[Math.floor(Math.random() * messagesBad.length)];
    console.log(messageBadRandom);
} else {
    for (let i = 0; i <= 3;) {
        let messageIncompréhension = "Pas compris";
        console.log(messageIncompréhension);
    } let messageAgressif = "Ecris mieux";
    console.log(messageAgressif);
}