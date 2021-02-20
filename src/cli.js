import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-mutable-exports
export let userName;
// eslint-disable-next-line import/prefer-default-export
export const getUserName = () => {
  const getName = readlineSync.question('May I have your name? ');
  userName = getName;
  console.log(`Hi ${userName}!`);
};
