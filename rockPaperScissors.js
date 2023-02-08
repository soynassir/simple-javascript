// function to identify user's choice
const getUserChoice = userInput => {
  // make all input lowercase letters
  userInput = userInput.toLowerCase();

  if(userInput == 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error!');
  }
};

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3)

  switch(choice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'Error!';
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'It\'s a tie'
  } else {
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'YOU WON!';
      }
    } else if (userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'The computer won!'; 
      } else {
        return 'YOU WON!';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'YOU WON!';
      }
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();

  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice))
}

playGame()
