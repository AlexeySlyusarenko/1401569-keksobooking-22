import {Type} from './const.js';

const formElement = document.querySelector('.ad-form');
const formTypeElement = formElement.querySelector('#type');
const formPriceElement = formElement.querySelector('#price');
const formTimeinElement = formElement.querySelector('#timein');
const formTimeoutElement = formElement.querySelector('#timeout');

const setMinPrice = (element, price) => {
  element.placeholder = price;
  element.min = price;
}

const changeTimeinHandler = (evt) => {
  formTimeoutElement.value = evt.target.value;
}

const changeTimeoutHandler = (evt) => {
  formTimeinElement.value = evt.target.value;
}

const setFormHandlers = () => {
  formTypeElement.addEventListener('change', (evt) => {
    switch (evt.target.value) {
      case Type.BUNGALOW:
        setMinPrice(formPriceElement, 0);
        break;
      case Type.FLAT:
        setMinPrice(formPriceElement, 1000);
        break;
      case Type.HOUSE:
        setMinPrice(formPriceElement, 5000);
        break;
      case Type.PALACE:
        setMinPrice(formPriceElement, 10000);
        break;
    }
  });

  formTimeinElement.addEventListener('change', changeTimeinHandler);
  formTimeoutElement.addEventListener('change', changeTimeoutHandler);
}

export {
  setFormHandlers
};
