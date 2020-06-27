export const isPrimeNumber = (num) => {
  if (num === 1) return false;
  const iter = (number, divider) => {
    if (number === divider) return true;
    if (number % divider === 0) return false;
    return iter(number, divider + 1);
  };
  return iter(num, 2);
};
