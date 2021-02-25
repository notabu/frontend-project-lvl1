#!/usr/bin/env node
import gameEngine from '../index.js';
import { getLargeRandomNum } from '../rand.js';

const getRandomNum = () => {
  const numbers = [];
  for (let i = 0; i < 2; i += 1) {
    numbers.push(getLargeRandomNum());
  }
  return numbers;
};

const getGCD = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }

  return getGCD(secondNum, firstNum % secondNum);
};

const generateQuestion = () => {
  const arrayNum = getRandomNum();
  return arrayNum.join(' ');
};

const generateRound = () => {
  const questionText = generateQuestion();
  const questionNum = questionText.split(' ');
  // eslint-disable-next-line consistent-return
  const correctAnswer = String(getGCD(Number(questionNum[0]), Number(questionNum[1])));
  return { questionText, correctAnswer };
};

export default () => {
  const conditionGame = 'Find the greatest common divisor of given numbers.';
  gameEngine(generateRound, conditionGame);
};
