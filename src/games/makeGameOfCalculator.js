import _ from 'lodash';
import { talkWithUser } from '../index.js';
import { getGeneratedNumber } from '../numberGenerator.js';
import { getGeneratedSymbol } from '../symbolGenerator.js';

const getExpression = (num1, num2, symbol) => {
  const strExpression = `${num1} ${symbol} ${num2}`;
  let solution;
  switch (symbol) {
    case '+': {
      solution = num1 + num2;
      break;
    }
    case '-': {
      solution = num1 - num2;
      break;
    }
    case '*': {
      solution = num1 * num2;
      break;
    }
    default: {
      break;
    }
  }
  return [strExpression, solution];
};

const constructor = () => {
  const [question, answer] = getExpression(getGeneratedNumber(),
    getGeneratedNumber(), getGeneratedSymbol());
  return [question, _.toString(answer)];
};

export const makeGame = () => {
  const description = 'What is the result of the expression?';
  return talkWithUser(description, constructor);
};
