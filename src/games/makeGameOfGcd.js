import _ from 'lodash';
import { talkWithUser } from '../index.js';
import { getGeneratedNumber } from '../numberGenerator.js';
import { isPrimeNumber } from '../checkPrimeNumber.js';

const getArrayDividers = (num) => {
  const iter = (number, array, divider) => {
    if (number < divider) return array;
    return (!isPrimeNumber(divider)
      || number % divider !== 0 ? iter(number, array, divider + 1)
      : iter(number / divider, [...array, divider], divider));
  };
  return iter(num, [], 2);
};

const constructor = () => {
  const result = (question, answer) => [question, answer];
  const num1 = getGeneratedNumber();
  const num2 = getGeneratedNumber();
  const question = `${num1} ${num2}`;
  const arr1 = getArrayDividers(num1);
  const arr2 = getArrayDividers(num2);
  const answer = arr1.reduce((acc, v) => {
    if (arr2.indexOf(v) > -1) {
      const deleteEl = arr2.indexOf(v);
      arr2.splice(deleteEl, 1);
      return [...acc, v];
    }
    return acc;
  }, []).reduce((acc, v) => acc * v, 1);
  return result(question, _.toString(answer));
};

export const makeGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  return talkWithUser(description, constructor);
};
