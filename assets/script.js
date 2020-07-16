let messagesBienvenue = ["Hello !", "Hi !", "What's up ?"];
let messageBienvenueRandom = messagesBienvenue[Math.floor(Math.random() * messagesBienvenue.length)];

const gallery = [
    "assets/images/robot_neutral.png",
    "assets/images/robot_happy.png",
    "assets/images/robot_mad.png",
];

document.getElementById("botoutput").innerHTML = messageBienvenueRandom + " Are you feeling well today?";

document.getElementById("submit").addEventListener("click", () =>{ 
    
    
    let stringAnswer = document.getElementById("answer").value;
    if ((stringAnswer.toLowerCase().includes("yes")) && (stringAnswer.toLowerCase().includes("no"))) {
        let messageMitigé="Choose yes or no?";
        document.getElementById("botoutput").innerHTML = messageMitigé;
    }
    else if (stringAnswer.toLowerCase().includes("yes")) {
        let messagesGood = ["Cool story bro", "Urgh... great..", "Noice"];
        let messageGoodRandom = messagesGood[Math.floor(Math.random() * messagesGood.length)];
        document.getElementById("botoutput").innerHTML = messageGoodRandom;
        let image = document.getElementsByTagName("img")[0];        
        image.setAttribute("src", gallery[1]);
        setTimeout(function(){
            let messageFin="Bye";
            let buttonDisabled=document.getElementById("submit");
            buttonDisabled.disabled=true;
            document.getElementById("botoutput").innerHTML = messageFin;
        },3000);

    } else if (stringAnswer.toLowerCase().includes("no")) {
        let messagesBad = ["Not interested", "I don't care, sorry", "Booooooooring"];
        let messageBadRandom = messagesBad[Math.floor(Math.random() * messagesBad.length)];
        document.getElementById("botoutput").innerHTML = messageBadRandom;
        let image = document.getElementsByTagName("img")[0];        
        image.setAttribute("src", gallery[2]);

    } else {
        let image = document.getElementsByTagName("img")[0];        
        image.setAttribute("src", gallery[2]);
        for (let i = 0; i <= 3; i++) {
            let messageIncompréhension = "I didn't get that..";
            document.getElementById("botoutput").innerHTML = messageIncompréhension;
        } let messageAgressif = "Did you spell that right?";
        document.getElementById("botoutput").innerHTML = messageAgressif;
    }
});
