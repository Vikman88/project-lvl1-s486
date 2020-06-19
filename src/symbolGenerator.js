import _ from 'lodash';

export const getGeneratedSymbol = () => ['*','-','+'][_.random(2)];
