#!/usr/bin/env node
import gameEngine from '../index.js';
import getRandomNum from '../rand.js';

// function for checking a number for parity
const isEven = (num) => (num % 2 === 0);

const generateRound = () => {
  const questionText = getRandomNum();
  const correctAnswer = isEven(questionText) ? 'yes' : 'no';

  return { questionText, correctAnswer };
};

export default () => {
  const conditionGame = '"yes" if the number is even, otherwise answer "no".';
  gameEngine(generateRound, conditionGame);
};
