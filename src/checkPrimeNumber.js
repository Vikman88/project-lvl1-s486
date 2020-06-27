export const isPrimeNumber = (num) => {
  const iter = (number, divider) => {
    if (number === 1) return false;
    if (number === divider) return true;
    if (number % divider === 0) return false;
    return iter(number, divider + 1);
  };
  return iter(num, 2);
};
