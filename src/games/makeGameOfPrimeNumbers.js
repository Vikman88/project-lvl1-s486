import _ from 'lodash';
import { talkWithUser } from '../index.js';
import { isPrimeNumber } from '../checkPrimeNumber.js';
import { getGeneratedNumber } from '../numberGenerator.js';

const constructor = () => {
  const result = (question, answer) => [question, answer];
  const question = getGeneratedNumber();
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  return result(_.toString(question), answer);
};

export const makeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return talkWithUser(description, constructor);
};
