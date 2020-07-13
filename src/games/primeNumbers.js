import _ from 'lodash';
import { makeGame } from '../index.js';
import { getGeneratedNumber } from '../numberGenerator.js';

const isPrimeNumber = (num) => {
  if (num <= 1) return false;
  const iter = (number, divider) => {
    if (number / 2 < divider) return true;
    if (number % divider === 0) return false;
    return iter(number, divider + 1);
  };
  return iter(num, 2);
};

const createQuestionAnswer = () => {
  const question = getGeneratedNumber();
  const answer = (isPrimeNumber(question) ? 'yes' : 'no');
  return [_.toString(question), answer];
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return makeGame(description, createQuestionAnswer);
};
