import _ from 'lodash';
import { talkWithUser } from '../index.js';

const convertToString = (num, arr) => arr.map((v, i) => (i === num ? '..' : v)).join(' ');

const constructor = () => {
  const countNumbers = 10;
  const randomNum1 = _.random(1, 10);
  const randomNum2 = _.random(50);
  const hideNum = _.random(9);
  const question = _.times(countNumbers, (v) => v * randomNum1 + randomNum2);
  const answer = question[hideNum];
  return [convertToString(hideNum, question), _.toString(answer)];
};

export const makeGame = () => {
  const description = 'What number is missing in the progression?';
  return talkWithUser(description, constructor);
};
