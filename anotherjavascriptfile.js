const selection = document.getElementById("rps")
const play = document.getElementById("play_rps")
const bot = document.getElementById("bot")
const result = document.getElementById("result")

const rps = ["rock", "paper", "scissors"]
function rps_picker(){
    let choice = rps[Math.floor(Math.random() * 3)]
    bot.innerHTML = "bot: " + choice;
    let playerChoice = selection.value;
    console.log(playerChoice)
    if (playerChoice === "rock"){
        if(choice === 'scissors'){
            result.innerHTML = "win"
        }
        else if (choice === "paper"){
            result.innerHTML = "lose"
        }
        else {
            result.innerHTML = "tie"
        }
    }
    else if (playerChoice === "scissors"){
        if(choice === 'scissors'){
            result.innerHTML = "tie"
        }
        else if (choice === "paper"){
            result.innerHTML = "win"
        }
        else {
            result.innerHTML = "lose"
        }
    }
    else if (playerChoice === "paper"){
        if(choice === 'scissors'){
            result.innerHTML = "lose"
        }
        else if (choice === "rock"){
            result.innerHTML = "win"
        }
        else {
            result.innerHTML = "tie"
        }
    }

}

play.addEventListener('click', rps_picker)


