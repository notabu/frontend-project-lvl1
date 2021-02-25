import { getSmallRandomNum } from '../rand.js';
import gameEngine from '../index.js';

const getProgressionNum = () => {
  const result = [];
  let randomIndex = getSmallRandomNum();
  const stepsCount = getSmallRandomNum();

  while (result.length < 10) {
    result.push(randomIndex);
    randomIndex += stepsCount;
  }
  return result;
};

const getQuestion = () => {
  const numbers = getProgressionNum();
  const index = getSmallRandomNum();
  const questText = String(numbers[index]);
  numbers[index] = ['..'];
  return { numbers, index, questText };
};

const generateRound = () => {
  const quest = getQuestion();
  const questionText = quest.numbers.join(' ');
  const correctAnswer = quest.questText;
  return { questionText, correctAnswer };
};

export default () => {
  const conditionGame = 'What is the result of the expression?';
  gameEngine(generateRound, conditionGame);
};
