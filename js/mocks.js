import {
  getRandom,
  getRandomArray
} from './utils.js';

import {
  LOCATION_X_START,
  LOCATION_X_END,
  LOCATION_Y_START,
  LOCATION_Y_END,
  TITLES,
  DESCRIPTIONS,
  TYPES,
  TIMES,
  FEATURES,
  PHOTOS
} from './const.js';

const titles = TITLES.split('. ');
const descriptions = DESCRIPTIONS.split('. ');

const createMock = () => {
  const mock = {
    author: {
      avatar: `img/avatars/user0${getRandom(1, 8)}.png`,
    },
    offer: {
      title: titles[getRandom(1, titles.length - 1)],
      price: 1 / Math.pow(Math.random(), 1 / Math.random()),
      type: TYPES[getRandom(0, TYPES.length - 1)],
      rooms: getRandom(0, 1 / Math.pow(Math.random(), 1 / Math.random())),
      guests: getRandom(0, 1 / Math.pow(Math.random(), 1 / Math.random())),
      checkin: TIMES[getRandom(0, TIMES.length - 1)],
      checkout: TIMES[getRandom(0, TIMES.length - 1)],
      features: getRandomArray(FEATURES),
      description: descriptions[getRandom(1, titles.length - 1)],
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: getRandom(LOCATION_X_START, LOCATION_X_END, 5),
      y: getRandom(LOCATION_Y_START, LOCATION_Y_END, 5),
    },
  };

  mock.offer.address = `${mock.location.x}, ${mock.location.y}`;
  
  return mock;
}

const generateMocks = (number) => {
  const mocks = [];
  
  for (let i = 0; i < number; i++) {
    mocks.push(createMock());
  }

  return mocks;
}

export {
  generateMocks
}