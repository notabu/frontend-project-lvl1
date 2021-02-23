#!/usr/bin/env node
import gameEngine from '../index.js';
import { getSmallRandomNum } from '../rand.js';

// function for checking a number for parity
const isEven = (num) => (num % 2 === 0);

const generateRound = () => {
  const questionText = getSmallRandomNum();
  const correctAnswer = isEven(questionText) ? 'yes' : 'no';

  return { questionText, correctAnswer };
};

export default () => {
  const conditionGame = '"yes" if the number is even, otherwise answer "no".';
  gameEngine(generateRound, conditionGame);
};
