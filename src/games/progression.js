import _ from 'lodash';
import { makeGame } from '../index.js';

const modifyStr = (num, arr) => arr.map((v, i) => (i === num ? '..' : v)).join(' ');

const createQuestionAnswer = () => {
  const countNumbers = 10;
  const randomNum1 = _.random(1, 10);
  const randomNum2 = _.random(50);
  const hideNum = _.random(countNumbers - 1);
  const createStrWithNumbers = _.times(countNumbers, (v) => v * randomNum1 + randomNum2);
  const answer = createStrWithNumbers[hideNum];
  const question = modifyStr(hideNum, createStrWithNumbers);
  return [question, _.toString(answer)];
};

export const playGame = () => {
  const description = 'What number is missing in the progression?';
  return makeGame(description, createQuestionAnswer);
};
