const NUMBER_SHOW_PIN = 10;
const DELAY_SHOW_PIN = 500;
const TYPE_ANY = 'any';

const FieldFormFilter = {
  TYPE: 'type',
  PRICE: 'price',
  ROOMS: 'rooms',
  GUESTS: 'guests',
  FEATURES: 'features',
};

const TypeHousing = {
  ANY: 'any',
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
  MIDDLE: 'middle',
  LOW: 'low',
  HIGH: 'high',
  LOW_PRICE: 10000,
  HIGH_PRICE: 50000,
};

const TypeGuests = {
  TWO: '2', 
  ONE: '1',
  NOT_FOR_GUESTS: '0',
};

const DefaultCoord = {
  LAT: 35.65283,
  LNG: 139.83948,
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

const Message = {
  SUCCESS_SEND_FORM: 'Ваше объявление<br>успешно размещено!',
  ERROR_SEND_FORM: 'Ошибка размещения объявления',
};

const DefaultForm = {
  TITLE: '',
  PRICE: '',
  TIME_IN: '12:00',
  TIME_OUT: '12:00',
  ROOMS: NumberRoom.ONE,
}

export {
  NUMBER_SHOW_PIN,
  DELAY_SHOW_PIN,
  TYPE_ANY,
  FieldFormFilter,
  TypeHousing,
  TypePrice,
  TypeGuests,
  DefaultCoord,
  MainPinIconSize,
  Form,
  NumberRoom,
  CapacityRoom,
  Message,
  DefaultForm
}
