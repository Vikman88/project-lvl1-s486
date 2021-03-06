import _ from 'lodash';
import { playGame } from '../index.js';
import { getGeneratedNumber } from '../numberGenerator.js';

const isEvenNumber = (num) => num % 2 === 0;

const createQuestionAnswer = () => {
  const question = getGeneratedNumber();
  const answer = (isEvenNumber(question) ? 'yes' : 'no');
  return [_.toString(question), answer];
};

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  return playGame(description, createQuestionAnswer);
};
