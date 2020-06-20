import _ from 'lodash';
import {getGeneratedNumber} from './numberGenerator.js';
import {getGeneratedSymbol} from './symbolGenerator.js';

export const constructor = (game) => () => {
  switch (game) {

    case "even": {
      const questionEven = getGeneratedNumber();
      const answerEven = isEvenNumber(questionEven) ? 'yes' : 'no';
      const resultEven = [_.toString(questionEven), answerEven];
      return resultEven;
    }

    case "calc": {
      const questionCalc = `${getGeneratedNumber()} ${getGeneratedSymbol()} ${getGeneratedNumber()}`;
      const resultCalc = [questionCalc, _.toString(getExpressionResultFromString(questionCalc))];
      return resultCalc;
    }

    case "gcd": {
      const num1 = getGeneratedNumber();
      const num2 = getGeneratedNumber();
      const questionGcd = `${num1} ${num2}`;
      const arr1 = getArrayDividers(num1);
      const arr2 = getArrayDividers(num2);
      const answerGcd = arr1.reduce((acc, v) => {
        if (arr2.indexOf(v) > -1) {
          const deleteEl = arr2.indexOf(v);
          arr2.splice(deleteEl, 1);
          return [...acc, v];
        }
        return acc;
      }, []).reduce((acc, v) => acc *= v, 1);
      const resultGcd = [questionGcd, _.toString(answerGcd)];
      return resultGcd;
    }

    case "progression": {
      const randomNum1 = _.random(1, 10);
      const randomNum2 = _.random(50);
      const hideNum = _.random(9);
      const questionProgression = _.times(10, (v) => v * randomNum1 + randomNum2);
      const answerProgression = questionProgression[hideNum];
      const resultProgression = [convertToString(hideNum, questionProgression), _.toString(answerProgression)];
      return resultProgression;
    }

    case "prime": {
      const questionPrime = getGeneratedNumber();
      const answerPrime = isPrimeNumber(questionPrime) ? 'yes' : 'no';
      const resultPrime = [_.toString(questionPrime), answerPrime];
      return resultPrime;
    }
  }
};

const isEvenNumber = (num) => num % 2 === 0;

const isPrimeNumber = (num, divider = 2) => {
  if (num === 1) return false;
  if (num === divider) return true;
  if (num % divider === 0) return false;
  return isPrimeNumber(num, divider += 1);
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
