import _ from 'lodash';
import { talkWithUser } from '../index.js';
import { getGeneratedNumber } from '../numberGenerator.js';
import { getBoolAnswer } from '../boolAnswer.js';

const isEvenNumber = (num) => num % 2 === 0;

const constructor = () => {
  const question = getGeneratedNumber();
  const answer = getBoolAnswer(isEvenNumber(question));
  return [_.toString(question), answer];
};

export const makeGame = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  return talkWithUser(description, constructor);
};
