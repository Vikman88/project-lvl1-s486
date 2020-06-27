import _ from 'lodash';
import { talkWithUser } from '../index.js';
import { isPrimeNumber } from '../checkPrimeNumber.js';
import { getGeneratedNumber } from '../numberGenerator.js';
import { getBoolAnswer } from '../boolAnswer.js';

const constructor = () => {
  const result = (question, answer) => [question, answer];
  const question = getGeneratedNumber();
  const answer = getBoolAnswer(isPrimeNumber(question));
  return result(_.toString(question), answer);
};

export const makeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return talkWithUser(description, constructor);
};
