#!/usr/bin/env node
import gameEngine from '../index.js';
import { getLargeRandomNum } from '../rand.js';

const isPrime = (number) => {
  if (number < 2) return false;
  let index = 2;
  while (index < number) {
    if (number % index === 0) return false;
    index += 1;
  }
  return true;
};

const generateRound = () => {
  const questionText = String(getLargeRandomNum());
  const correctAnswer = isPrime(questionText) ? 'yes' : 'no';

  return { questionText, correctAnswer };
};

export default () => {
  const conditionGame = '"yes" if given number is prime. Otherwise answer "no".';
  gameEngine(generateRound, conditionGame);
};
