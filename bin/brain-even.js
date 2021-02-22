#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getUserName, userName } from '../src/cli.js';

// function random number generator
const getRandomNum = (min = 1, max = 10) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// function for checking a number for parity
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const countSteps = 3;
// eslint-disable-next-line import/prefer-default-export
export const getUserAnswer = () => {
  console.log('"yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < countSteps; i += 1) {
    // generate random number
    const randomNum = getRandomNum();
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === isEven(randomNum)) {
      console.log('Correct!');
    } else if (userAnswer !== isEven(randomNum)) {
      return console.log(`'${userAnswer}' is wrong answer. Correct answer was '${isEven(randomNum)}'. Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};

// Приветствуем пользователя
console.log('Welcome to the Brain Games!');

// Запрашиваем имя пользователя и приветствуем его
getUserName();

// Запускаем игру
getUserAnswer();
