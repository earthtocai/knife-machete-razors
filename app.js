var playerScore = 0;
var slasherScore = 0;
const playerScore_span = document.getElementById("player-score");
const slasherScore_span = document.getElementById("slasher-score");
const result_p = document.querySelector(".result > p");
const knife_div = document.getElementById("knife");
const machete_div = document.getElementById("machete");
const razors_div = document.getElementById("razors");


function computerChoice() {
    const choices = ['knife', 'machete', 'razors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}
function convertToSentence(playerSelection, computerSelection) {
    let tie = "It's a tie. You're safe for now...";
    let knifeBeatMachete = "Knife Beats Machete. You kill. What's your favorite scary movie?";
    let macheteBeatRazors = "Machete beats Razors. You kill. Did you know my son drowned in this lake?";
    let razorsBeatKnife = "Razors beat knife. You kill. I'm your boyfriend now, Nancy.";
    let razorsBeatKnifeLoss = "Razors beat knife. You die. 1, 2, Freddy's coming for you...";
    let knifeBeatMacheteLoss = "Knife beats Machete. You die. Have you ever felt a knife cut through human flesh and scrape the bone beneath?";
    let macheteBeatRazorsLoss = "Machete beats Razors. You die. You're going to Camp Blood, ain't ya?";

    if (playerSelection === computerSelection) {
        return tie;
    } else if (playerSelection === "knife" && computerSelection === "machete") {
        return knifeBeatMachete;
    } else if (playerSelection === "knife" && computerSelection === "razors") {
        return razorsBeatKnifeLoss;
    } else if (playerSelection === "machete" && computerSelection === "razors") {
        return macheteBeatRazors;
    } else if (playerSelection === "machete" && computerSelection === "knife") {
        return knifeBeatMacheteLoss;
    } else if (playerSelection === "razors" && computerSelection === "knife") {
        return razorsBeatKnife;
    } else {
        return macheteBeatRazorsLoss;
    }
}



function win(userChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    slasherScore_span.innerHTML = slasherScore;
    result_p.innerHTML = convertToSentence(userChoice, computerChoice);
}

setTimeout 

function lose(userChoice, computerChoice) {
    slasherScore++;
    playerScore_span.innerHTML = playerScore;
    slasherScore_span.innerHTML = slasherScore;
    result_p.innerHTML = convertToSentence(userChoice, computerChoice);
}

function tie(userChoice, computerChoice) {
    playerScore_span.innerHTML = playerScore;
    slasherScore_span.innerHTML = slasherScore;
    result_p.innerHTML = convertToSentence(userChoice, computerChoice);
}


function game(userChoice) {
    const computerPlay = computerChoice();
    switch(userChoice + computerPlay) {
        case "knifeknife":
        case "machetemachete":
        case "razorsrazors":
            tie(userChoice, computerPlay)
            break;
        case "knifemachete": 
            win(userChoice, computerPlay);
            break;
        case "kniferazors":
            lose(userChoice, computerPlay);
            break;
        case "macheterazors":
            win(userChoice, computerPlay);
            break;
        case "macheteknife":
            lose(userChoice, computerPlay);
            break;
        case "razorsknife":
            win(userChoice, computerPlay);
            break;
        case "razorsmachete":
            lose(userChoice, computerPlay);
            break;
    }
}

function main() {


knife_div.addEventListener("click", function(){
    game("knife");
})
machete_div.addEventListener("click", function(){
    game("machete");
})
razors_div.addEventListener("click", function(){
    game("razors");
})

}
main();