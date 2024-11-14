"strict";
let hWins = 0;
let pcWins = 0;
let rounds = 0;

// create pc choice change num to choice
const getComputerChoice = function () {
  let num = Math.floor(Math.random() * 3);
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

// prompt human choice
const getHumanChoice = function () {
  const choice = prompt("choose rock, paper, or scissors");
  const lowerAns = choice.toLowerCase();
  return lowerAns;
};

const choiceConv = function (choice) {
  if (choice === "rock") {
    return 1;
  } else if (choice === "paper") {
    return 2;
  } else {
    return 3;
  }
};
// take choices of both and change them to nums after check who wins
function playRound(humanChoice, computerChoice) {
  let newHum = choiceConv(humanChoice);
  let newComp = choiceConv(computerChoice);

  if (newHum === 1 && newComp === 3) {
    console.log(`You win ${humanChoice} beats ${computerChoice}`);
  } else if (newHum === 3 && newComp === 1) {
    console.log(`You lose ${humanChoice} loses to ${computerChoice}`);
  } else if (newHum > newComp) {
    console.log(`You win ${humanChoice} beats ${computerChoice}`);
    console.log(newHum, newComp, humanChoice, computerChoice);
    return hWins++;
  } else if (newHum < newComp) {
    console.log(`You lose ${humanChoice} loses to ${computerChoice}`);
    console.log(newHum, newComp, humanChoice, computerChoice);
    return pcWins++;
  } else {
    console.log(`You tie ${humanChoice} ties to ${computerChoice}`);
    console.log(newHum, newComp, humanChoice, computerChoice);
  }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);
// console.log(hWins, pcWins);

//each play round returned a value for wins, loop round 5 times then check
const playGame = function () {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (hWins > pcWins) {
    console.log("you win");
  } else if (hWins === pcWins) {
    console.log("tie");
  } else {
    console.log("you lose");
  }
};

playGame();
