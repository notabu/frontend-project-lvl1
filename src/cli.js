import readlineSync from 'readline-sync';

export let userName;
export const getUserName = () => {
  const getName = readlineSync.question('May I have your name? ');
  userName = getName;
  console.log(`Hi ${userName}!`);
};
