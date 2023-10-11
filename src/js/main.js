import { generateRandomNumber, isOdd, caseByNumber } from './utils.js';

let attempts = 0;

let targetNumber = generateRandomNumber(1, 100);

const rangeSlider = document.querySelector('.rangeSlider');
const rangeValue = document.querySelector('#rangeValue');

rangeSlider.addEventListener('input', function() {
    rangeValue.textContent = this.value;
    targetNumber = generateRandomNumber(1, this.value);
    console.log(targetNumber);
    resetGame(); 
});

function setMessage(message) {
    const messageElement = document.querySelector('.message');
    messageElement.textContent = message;
}

function checkGuess() {
  const guessField = document.querySelector('.guessField');
  const userGuess = parseInt(guessField.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    setMessage('Введите число от 1 до 100!');
    return;
  }

  attempts++;
  updateAttempts();

  if (userGuess === targetNumber) {
    setMessage(`Поздравляю! Вы угадали число за ${attempts} ${caseByNumber(attempts, ['попытку', 'попытки', 'попыток'])}!`);
  } else if (attempts % 3 === 0) {
    setMessage(
      isOdd(targetNumber) ? 'Число не четное :)' : 'Число четное :)'
    );
  } else {
    console.log(userGuess, targetNumber);
    setMessage(
      userGuess < targetNumber
        ? 'Загаданное число больше'
        : 'Загаданное число меньше'
    );
  }

  guessField.value = '';
}

const submitButton = document.querySelector('.guessSubmit');
submitButton.addEventListener('click', checkGuess);

function updateAttempts() {
  const attemptsElement = document.querySelector('.attempts');
  attemptsElement.textContent = `Попыток: ${attempts}`;
}

function resetGame() {
  attempts = 0;
  updateAttempts();
  setMessage('');
}

// Добавление обработчика события на кнопку "Начать заново"
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetGame);

