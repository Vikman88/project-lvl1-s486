import {talkWithUser} from '../index.js';
import {constructor} from '../engine';

export const makeGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  return talkWithUser(description, constructor('gcd'));
};
