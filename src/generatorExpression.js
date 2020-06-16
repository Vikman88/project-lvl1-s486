import {getGeneratedNumber} from './numberGenerator.js';
import _ from 'lodash';

export const getRandomExpression = () => {
  const arr = ['*','-','+'];
  const getRandomSymbol = arr[_.random(2)];
  return `${getGeneratedNumber()} ${getRandomSymbol} ${getGeneratedNumber()}`;
};

