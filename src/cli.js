import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-mutable-exports
export let userName;
export const getUserName = () => {
  const getName = readlineSync.question('May I have your name? ');
  userName = getName;
  console.log('Hello', userName);
};
