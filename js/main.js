const NUMBER_MOCK = 10;
const TITLE = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const titles = TITLE.split('. ');
const descriptions = DESCRIPTION.split('. ');

const getRandom = (min = 0, max = min + 1, round = 0) => {
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
}

const getRandomArray = (array) => {
  return array.filter(() => getRandom(0, 1));
}

const createMock = () => {
  return {
    author: {
      avatar: `img/avatars/user0${getRandom(1, 8)}.png`,
    },
    offer: {
      title: titles[getRandom(1, titles.length - 1)],
      address: `${location.x}, ${location.y}`,
      price: 1 / Math.pow(Math.random(), 1 / Math.random()),
      type: TYPES[getRandom(0, TYPES.length - 1)],
      rooms: getRandom(0, 1 / Math.pow(Math.random(), 1 / Math.random())),
      guests: getRandom(0, 1 / Math.pow(Math.random(), 1 / Math.random())),
      checkin: CHECKIN[getRandom(0, CHECKIN.length - 1)],
      checkout: CHECKOUT[getRandom(0, CHECKOUT.length - 1)],
      features: getRandomArray(FEATURES),
      description: descriptions[getRandom(1, titles.length - 1)],
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: getRandom(35.65000, 35.70000, 5),
      y: getRandom(139.70000, 139.80000, 5),
    },
  };
}

for (let i = 0; i < NUMBER_MOCK; i++) {
  createMock();
}
