import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

const userName = () => {

}