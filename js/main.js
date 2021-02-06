const getRandomInteger = (min = 0, max = min + 1, round = 0) => {
  min = min >= 0 ? min : 0;

  if (max < 0) {
    throw new Error('Аргументы функции должны быть больше 0');
  }
  if (max === min) {
    return min.toFixed(round);
  }
  if (max - min < 1 / Math.pow(10, round)) {
    throw new Error('Не достаточная точность при данном диапозоне значений "от" и "до"');
  }
  
  return + (Math.random() * (max - min) + min).toFixed(round);
};

getRandomInteger(1.23, 3.34356, 1);
