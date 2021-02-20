#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getUserName, userName } from '../src/cli.js';

const numbers = [15, 6, 7];

// function for checking a number for parity
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

// eslint-disable-next-line import/prefer-default-export
export const getUserAnswer = () => {
  console.log('"yes" if the number is even, otherwise answer "no".');

  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === isEven(number)) {
      console.log('Correct!');
    } else if (userAnswer !== isEven(number)) {
      return console.log(`'${userAnswer}' is wrong answer. Correct answer was '${isEven(number)}'. Let's try again, ${userName}!`);
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
