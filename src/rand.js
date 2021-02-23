// function random number generator
// eslint-disable-next-line import/prefer-default-export
export const getSmallRandomNum = (min = 1, max = 9) => {
  const randNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randNum);
};

export const getLargeRandomNum = (min = 1, max = 100) => {
  const randNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randNum);
};
