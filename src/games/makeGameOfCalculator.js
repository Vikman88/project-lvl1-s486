import {talkWithUser} from '../index.js';
import {getRandomExpression} from '../generatorExpression.js';
import {getExpressionResultFromString} from '../expressionResult.js';

export const makeGame = () => {
  const description = 'What is the result of the expression?';
  return talkWithUser(description, getRandomExpression, getExpressionResultFromString);
}
