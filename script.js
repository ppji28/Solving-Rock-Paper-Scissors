function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result, playerChoice, computerChoice);
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    }
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        return 'You win!';
    }
    return 'Computer wins!';
}

function displayResult(result, playerChoice, computerChoice) {
    const roundResult = document.getElementById('roundResult');
    roundResult.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}
