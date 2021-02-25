import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export,consistent-return
export const playGame = (generateRound, conditionGame) => {
  // welcome to the user
  console.log('Welcome to the Brain Games!');
  // asking for the user name
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hi', userName);
  const roundsCount = 3;
  // show the condition of the game
  console.log(conditionGame);

  for (let i = 0; i < roundsCount; i += 1) {
    // asking a question
    const { questionText, correctAnswer } = generateRound();
    console.log('Question:', questionText);
    // asking an answer
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

const gameEngine = (generateRound, conditionGame) => {
  playGame(generateRound, conditionGame);
};

export default gameEngine;
