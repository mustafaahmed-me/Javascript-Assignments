
// let imgEl = document.querySelectorAll("img")[0];
// imgEl.style.height = "300px";

// let myScr = 0;
// let oppnentScr = 0;

// function clickGame() {

//     let game = Math.ceil(Math.random() * 3);
//     console.log(game);

//     if (game === 1){
//         imgEl.src = "image/rock.png";
//     }
//     else if (game === 2){
//         imgEl.src = "image/paper.png";
//     }
//     else if (game === 3) {
//         imgEl.src = "image/scissor.png";
//     }
    
// }




//    

// function clickGame(playerChoice) {
//     let choices = ["rock", "paper", "scissors"];
//     let computerChoice = choices[Math.floor(Math.random() * 3)];

//     // Update images
//     playerImg.src = `image/${playerChoice}.png`;
//     computerImg.src = `image/${computerChoice}.png`;

//     // Determine winner
//     let resultText = "";

//     if (playerChoice === computerChoice) {
//         resultText = "It's a tie!";
//     } else if (
//         (playerChoice === "rock" && computerChoice === "scissors") ||
//         (playerChoice === "paper" && computerChoice === "rock") ||
//         (playerChoice === "scissors" && computerChoice === "paper")
//     ) {
//         resultText = "You Win!";
//         playerScore++;
//     } else {
//         resultText = "Computer Wins!";
//         computerScore++;
//     }

//     // Update scores and result text
//     document.getElementById("result").innerText = resultText;
//     document.getElementById("playerScore").innerText = playerScore;
//     document.getElementById("computerScore").innerText = computerScore;
// }






let playerImg = document.getElementById("playerImg");
let computerImg = document.getElementById("computerImg");
let playerScore = 0;
let computerScore = 0;

function clickGame(playerChoice) {
    let choice = ["rock", "paper", "scissor"];
    let compChoice = choice[Math.ceil(Math.random() * 3)];


    playerImg = playerImg.src = `image/${playerChoice}`;
    computerImg = computerImg.src = `image/${compChoice}`;
    
    let resultText = "";

        if (playerChoice === compChoice) {
            resultText = "It's a tie!";
        } else if (
            (playerChoice === "rock" && compChoice === "scissors") ||
            (playerChoice === "paper" && compChoice === "rock") ||
            (playerChoice === "scissors" && compChoice === "paper")
        ) {
            resultText = "You Win!";
            playerScore++;
        } else {
            resultText = "Computer Wins!";
            computerScore++;
        }
}