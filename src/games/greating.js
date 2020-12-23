import { log, getAnswer } from '../game-cli.js';

export default () => {
  log('Welcome to the Brain Games!');
  const name = getAnswer('May I have your name? ');
  log(`Hello, ${name}!`);
};
