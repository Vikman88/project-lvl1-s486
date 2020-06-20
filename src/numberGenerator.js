import _ from 'lodash';

const minNum = 1;
const maxNum = 100;

export const getGeneratedNumber = () => _.random(minNum, maxNum);
