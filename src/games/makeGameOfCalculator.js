import {talkWithUser} from '../index.js';
import {constructor} from '../engine';

export const makeGame = () => {
  const description = 'What is the result of the expression?';
  return talkWithUser(description, constructor('calc'));
};
