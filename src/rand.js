// function random number generator
// eslint-disable-next-line import/prefer-default-export
export const getRandomNum = (min = 1, max = 10) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
