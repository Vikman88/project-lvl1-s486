import _ from 'lodash';
import {getGeneratedNumber} from './numberGenerator.js';
import {getGeneratedSymbol} from './symbolGenerator.js';

export const constructor = (game) => () => {
  let question;
  let answer;
  const result = (question, answer) => [question, answer];
  switch (game) {

    case "even": {
      question = getGeneratedNumber();
      answer = isEvenNumber(question) ? 'yes' : 'no';
      return result(_.toString(question), answer);
    }

    case "calc": {
      question = `${getGeneratedNumber()} ${getGeneratedSymbol()} ${getGeneratedNumber()}`;
      return result(question, _.toString(getExpressionResultFromString(question)));
    }

    case "gcd": {
      const num1 = getGeneratedNumber();
      const num2 = getGeneratedNumber();
      question = `${num1} ${num2}`;
      const arr1 = getArrayDividers(num1);
      const arr2 = getArrayDividers(num2);
      answer = arr1.reduce((acc, v) => {
        if (arr2.indexOf(v) > -1) {
          const deleteEl = arr2.indexOf(v);
          arr2.splice(deleteEl, 1);
          return [...acc, v];
        }
        return acc;
      }, []).reduce((acc, v) => acc *= v, 1);
      return result(question, _.toString(answer));
    }

    case "progression": {
      const countNumbers = 10;
      const randomNum1 = _.random(1, 10);
      const randomNum2 = _.random(50);
      const hideNum = _.random(9);
      question = _.times(countNumbers, (v) => v * randomNum1 + randomNum2);
      answer = question[hideNum];
      return result(convertToString(hideNum, question), _.toString(answer));
    }

    case "prime": {
      question = getGeneratedNumber();
      answer = isPrimeNumber(question) ? 'yes' : 'no';
      return result(_.toString(question), answer);
    }
  }
};

const isEvenNumber = (num) => num % 2 === 0;

const isPrimeNumber = (num) => {
  const iter = (num, divider) => {
    if (num === 1) return false;
    if (num === divider) return true;
    if (num % divider === 0) return false;
    return iter(num, divider += 1);
  }
  return iter(num, 2);
};

const convertToString = (num, arr) => arr.map((v, i) => (i === num ? '..' : v)).join(' ');

const getExpressionResultFromString = (str) => eval(str);

const getArrayDividers = (num) => {
  const iter = (number, array, divider) => {
  if (number < divider) return array;
  if (!isPrimeNumber(divider)) return iter(number, array, divider += 1);
  return (number % divider !== 0 ? iter(number, array, divider += 1)
    : iter(number / divider, [...array, divider], divider));
  }
  return iter(num, [], 2);
};
