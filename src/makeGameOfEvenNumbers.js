import {isEvenNumber} from './isEvenNumber.js';
import {getGeneratedNumber} from './numberGenerator.js';
import {dialogWithUser} from './index.js';

export const makeGame = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  return dialogWithUser(description, getGeneratedNumber, isEvenNumber);
};
