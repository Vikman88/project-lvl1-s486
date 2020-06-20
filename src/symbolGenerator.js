import _ from 'lodash';

const symbolsCount = ['*','-','+'];
const index = 2;

export const getGeneratedSymbol = () => symbolsCount[_.random(index)];
