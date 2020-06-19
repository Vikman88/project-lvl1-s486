import {talkWithUser} from '../index.js';
import {constructor} from '../engine';

export const makeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return talkWithUser(description, constructor('prime'));
};
