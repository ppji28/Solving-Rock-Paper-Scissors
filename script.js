let wins = 0;
let losses = 0;
let ties = 0;

function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    const result = determineWinner(playerChoice, computerChoice);
    updateScore(result);
    displayResult(result, playerChoice, computerChoice);
}

function determineWinner(player, computer) {
    if (player === computer) {
        ties++;
        return 'It\'s a tie!';
    }
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        wins++;
        return 'You win!';
    }
    losses++;
    return 'Computer wins!';
}

function updateScore(result) {
    const winsElement = document.getElementById('wins');
    const lossesElement = document.getElementById('losses');
    const tiesElement = document.getElementById('ties');

    winsElement.textContent = wins;
    lossesElement.textContent = losses;
    tiesElement.textContent = ties;
}

function displayResult(result, playerChoice, computerChoice) {
    const roundResult = document.getElementById('roundResult');
    roundResult.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}
