console.log('Rock, Paper, Scissors, Shoot!');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('That\'s not an input. Try again :)')
  }
}

const getComputerChoice = () => {
  computerInput = Math.floor(Math.random() * 3) ;
  if (computerInput === 0) {
    return 'rock';
  } else if (computerInput === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'TIE';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'COMPUTER WON!';
    } else if (computerChoice === 'scissors') {
      return 'YOU WON!';
    }
  } 

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'COMPUTER WON!'
    } else if (computerChoice === 'rock') {
      return 'YOU WON!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'COMPUTER WON!';
    } else if (computerChoice === 'paper') {
      return 'YOU WON!'
    }
  }
}

function playGame() {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()