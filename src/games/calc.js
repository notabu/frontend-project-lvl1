#!/usr/bin/env node
import gameEngine from '../index.js';
import { getSmallRandomNum } from '../rand.js';

const getOperators = () => {
  const operators = ['+', '-', '*'];
  const index = getSmallRandomNum(0, 2);
  return operators[index];
};

const getNumbers = () => {
  const numbers = [];
  for (let i = 0; i < 2; i += 1) {
    numbers.push(getSmallRandomNum());
  }
  return numbers.sort((a, b) => b - a);
};

const isRandom = () => {
  const numbers = getNumbers();
  const operators = getOperators();
  return `${numbers[0]} ${operators} ${numbers[1]}`;
};

const generateRound = () => {
  const questionText = isRandom();
  // eslint-disable-next-line consistent-return
  const isCalc = (firstNum, secondNum, operator) => {
    // eslint-disable-next-line default-case
    switch (operator) {
      case '+':
        return Number(firstNum) + Number(secondNum);
      case '-':
        return Number(firstNum) - Number(secondNum);
      case '*':
        return Number(firstNum) * Number(secondNum);
    }
  };

  const correctAnswer = String(isCalc(questionText[0], questionText[4], questionText[2]));

  return { questionText, correctAnswer };
};

export default () => {
  const conditionGame = 'What is the result of the expression?';
  gameEngine(generateRound, conditionGame);
};
