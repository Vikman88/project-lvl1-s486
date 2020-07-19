import _ from 'lodash';
import { playGame } from '../index.js';
import { getGeneratedNumber } from '../numberGenerator.js';

const gcd = (n1, n2) => {
  if (n1 === 0 || n2 === 0) return n1 + n2;
  if (n1 < n2) return gcd(n1, n2 % n1);
  return gcd(n1 % n2, n2);
};

const createQuestionAnswer = () => {
  const num1 = getGeneratedNumber();
  const num2 = getGeneratedNumber();
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2);
  return [question, _.toString(answer)];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  return playGame(description, createQuestionAnswer);
};
