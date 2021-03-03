const NUMBER_MOCK = 10;

const LOCATION_X_START = 35.65000;
const LOCATION_X_END = 35.70000;
const LOCATION_Y_START = 139.70000;
const LOCATION_Y_END = 139.80000;
const TITLES = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
const DESCRIPTIONS = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const Type = {
  PALACE: 'palace', 
  FLAT: 'flat',
  HOUSE: 'house',
  BUNGALOW: 'bungalow',
};

const TypePrice = {
  PALACE: 10000, 
  FLAT: 1000,
  HOUSE: 5000,
  BUNGALOW: 0,
};

const DefaultCoord = {
  BEGINLAT: 35.65283,
  BEGINLNG: 139.83948,
};

const MainPinIconSize = {
  WIDTH: 36,
  HEIGHT: 36,
};

const Form = {
  MIN_NAME_LENGTH: 30,
  MAX_NAME_LENGTH: 100,
};

const NumberRoom = {
  ONE: 1,
  DOUBLE: 2,
  THREE: 3,
  ONEHUNDRED: 100,
};

const CapacityRoom = {
  ONE: [1],
  DOUBLE: [1, 2],
  THREE: [1, 2, 3],
  ONEHUNDRED: [0],
};

export {
  NUMBER_MOCK,
  LOCATION_X_START,
  LOCATION_X_END,
  LOCATION_Y_START,
  LOCATION_Y_END,
  TITLES,
  DESCRIPTIONS,
  TYPES,
  TIMES,
  FEATURES,
  PHOTOS,
  Type,
  TypePrice,
  DefaultCoord,
  MainPinIconSize,
  Form,
  NumberRoom,
  CapacityRoom
}
