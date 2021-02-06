const getRandomInteger = (min = 0, max = min + 1, round = 0) => {
  if (min > max) {
    throw new Error(`Второй аргумент (аргумент "до") функции должен быть больше первого аргумента (аргумент "от")`);
  }
  if (max < 0) {
    throw new Error(`Второй аргумент (аргумент "до") функции должен быть больше 0`);
  }
  if (max == min) {
    return min;
  }
  if (max - min < 1 / Math.pow(10, round)) {
    throw new Error(`Не достаточная точность при данном диапозоне значений "от" и "до"`);
  }

  min = min >= 0 ? min : 0;

  return +(Math.random() * (max - min) + min).toFixed(round);
};