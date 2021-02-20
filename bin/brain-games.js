#!/usr/bin/env node
import { getUserName } from '../src/cli.js';
// eslint-disable-next-line import/named
import { getUserAnswer } from './brain-even.js';

// Приветствуем пользователя
console.log('Welcome to the Brain Games!');

// Запрашиваем имя пользователя и приветствуем его
getUserName();

// Запускаем игру
getUserAnswer();
