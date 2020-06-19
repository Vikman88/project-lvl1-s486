import {talkWithUser} from '../index.js';
import {constructor} from '../engine';

export const makeGame = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  return talkWithUser(description, constructor('even'));
};
