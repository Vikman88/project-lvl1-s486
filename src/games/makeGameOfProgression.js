import {talkWithUser} from '../index.js';
import {constructor} from '../engine';

export const makeGame = () => {
  const description = 'What number is missing in the progression?';
  return talkWithUser(description, constructor('progression'));
}
