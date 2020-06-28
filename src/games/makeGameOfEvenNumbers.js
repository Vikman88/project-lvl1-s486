import _ from 'lodash';
import { talkWithUser } from '../index.js';
import { getGeneratedNumber } from '../numberGenerator.js';

const isEvenNumber = (num) => num % 2 === 0;

const constructor = () => {
  const question = getGeneratedNumber();
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [_.toString(question), answer];
};

export const makeGame = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  return talkWithUser(description, constructor);
};
