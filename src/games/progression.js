import _ from 'lodash';
import { playGame } from '../index.js';

const getQuestion = (num, arr) => arr.map((v, i) => (i === num ? '..' : v)).join(' ');

const createQuestionAnswer = () => {
  const progressionLength = 10;
  const randomNum1 = _.random(1, 10);
  const randomNum2 = _.random(50);
  const hiddenNum = _.random(progressionLength - 1);
  const progression = _.times(progressionLength, (v) => v * randomNum1 + randomNum2);
  const answer = progression[hiddenNum];
  const question = getQuestion(hiddenNum, progression);
  return [question, _.toString(answer)];
};

export default () => {
  const description = 'What number is missing in the progression?';
  return playGame(description, createQuestionAnswer);
};
