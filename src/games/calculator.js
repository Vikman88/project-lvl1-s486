import _ from 'lodash';
import { playGame } from '../index.js';
import { getGeneratedNumber } from '../numberGenerator.js';

const getGeneratedOperator = () => {
  const operators = ['*', '-', '+'];
  const lastIndex = operators.length - 1;
  return operators[_.random(lastIndex)];
};

const calculate = (num1, num2, operator) => {
  let solution;
  switch (operator) {
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
  return solution;
};

const createQuestionAnswer = () => {
  const getNum = getGeneratedNumber();
  const getNum2 = getGeneratedNumber();
  const getOperator = getGeneratedOperator();
  const question = `${getNum} ${getOperator} ${getNum2}`;
  const answer = calculate(getNum, getNum2, getOperator);
  return [question, _.toString(answer)];
};

export default () => {
  const description = 'What is the result of the expression?';
  return playGame(description, createQuestionAnswer);
};
