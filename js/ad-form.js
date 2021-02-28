import {
  Type,
  TypePrice
} from './const.js';

import {
  disableForm,
  enableForm
} from './utils-form.js'

const adFormElement = document.querySelector('.ad-form');
const formTypeElement = adFormElement.querySelector('#type');
const formPriceElement = adFormElement.querySelector('#price');
const formTimeinElement = adFormElement.querySelector('#timein');
const formTimeoutElement = adFormElement.querySelector('#timeout');
const formAddressElement = adFormElement.querySelector('#address');

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

const setAdFormHandlers = () => {
  formTypeElement.addEventListener('change', (evt) => {
    switch (evt.target.value) {
      case Type.BUNGALOW:
        setMinPrice(formPriceElement, TypePrice.BUNGALOW);
        break;
      case Type.FLAT:
        setMinPrice(formPriceElement, TypePrice.FLAT);
        break;
      case Type.HOUSE:
        setMinPrice(formPriceElement, TypePrice.HOUSE);
        break;
      case Type.PALACE:
        setMinPrice(formPriceElement, TypePrice.PALACE);
        break;
    }
  });

  formTimeinElement.addEventListener('change', changeTimeinHandler);
  formTimeoutElement.addEventListener('change', changeTimeoutHandler);

  formAddressElement.addEventListener('keydown', (evt) => {
    evt.preventDefault();
  })
}

const disableAdForm = () => {
  disableForm(adFormElement, 'fieldset');
};

const enableAdForm = () => {
  enableForm(adFormElement, 'fieldset');
};

const setValueAddressInput = (value) => {
  formAddressElement.value = value;
}

export {
  setAdFormHandlers,
  disableAdForm,
  enableAdForm,
  setValueAddressInput
};
