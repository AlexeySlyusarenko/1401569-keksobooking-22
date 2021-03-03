import {
  Type,
  TypePrice,
  NumberRoom,
  CapacityRoom
  // Form
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
const formTitleElement = adFormElement.querySelector('#title');
const formRoomNumberElement = adFormElement.querySelector('#room_number');
const formCapacityElement = adFormElement.querySelector('#capacity');
const formCapacityOptionElements = formCapacityElement.querySelectorAll('option');

const setMinPrice = (element, price) => {
  element.placeholder = price;
  element.min = price;
  minPrice = price;
};

let minPrice;

const chooseMinPrice = (value) => {
  switch (value) {
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
};

const changeTimeinHandler = (evt) => {
  formTimeoutElement.value = evt.target.value;
};

const changeTimeoutHandler = (evt) => {
  formTimeinElement.value = evt.target.value;
};

const setFormCapacityOptions = (formCapacityElement, formCapacityOptionElements, capacityRooms) => {
  let isSetFormCapacityElement = false;

  for (const element of formCapacityOptionElements) {
    if(capacityRooms.includes(parseInt(element.value, 10))) {
      element.disabled = false;
      if (!isSetFormCapacityElement) {
        isSetFormCapacityElement = true;
        formCapacityElement.value = element.value;
      }
    } else {
      element.disabled = true;
    }
  }
}

const chooseCapacityOption = (element) => {
  switch(parseInt(element.value, 10)) {
    case NumberRoom.ONE:
      setFormCapacityOptions(formCapacityElement, formCapacityOptionElements, CapacityRoom.ONE);
      break;
    case NumberRoom.DOUBLE:
      setFormCapacityOptions(formCapacityElement, formCapacityOptionElements, CapacityRoom.DOUBLE);
      break;
    case NumberRoom.THREE:
      setFormCapacityOptions(formCapacityElement, formCapacityOptionElements, CapacityRoom.THREE);
      break;
    case NumberRoom.ONEHUNDRED:
      setFormCapacityOptions(formCapacityElement, formCapacityOptionElements, CapacityRoom.ONEHUNDRED);
      break;
  }
}

const setAdFormHandlers = () => {
  formTypeElement.addEventListener('change', (evt) => {
    chooseMinPrice(evt.target.value);
  });

  formTimeinElement.addEventListener('change', changeTimeinHandler);
  formTimeoutElement.addEventListener('change', changeTimeoutHandler);

  formAddressElement.addEventListener('keydown', (evt) => {
    evt.preventDefault();
  });

  formTitleElement.addEventListener('invalid', (evt) => {
    const validity = evt.target.validity;

    if(validity.tooShort) {
      evt.target.setCustomValidity('Заголовок должен состоять минимум из 30 символов');
    } else if (validity.tooLong) {
      evt.target.setCustomValidity('Заголовок должен состоять максимум из 100 символов');
    } else if (validity.valueMissing) {
      evt.target.setCustomValidity('Обязательное поле для заполнение');
    } else {
      evt.target.setCustomValidity('');
    }
  });
  formTitleElement.addEventListener('input', (evt) => {
    // const valueLength = evt.target.value.length;

    // if (valueLength < Form.MIN_NAME_LENGTH) {
    //   evt.target.setCustomValidity(`Ещё ${(Form.MIN_NAME_LENGTH - valueLength)} симв.`);
    // } else if (valueLength > Form.MAX_NAME_LENGTH) {
    //   evt.target.setCustomValidity(`Удалите лишние ${(valueLength - Form.MAX_NAME_LENGTH)} симв.`);
    // } else {
    //   evt.target.setCustomValidity('');
    // }
  
    evt.target.reportValidity();
  });

  formPriceElement.addEventListener('invalid', (evt) => {
    const validity = evt.target.validity;

    if(validity.rangeUnderflow) {
      evt.target.setCustomValidity(`Цена должна быть больше  ${minPrice}`);
    } else if (validity.rangeOverflow) {
      evt.target.setCustomValidity('Цена должна быть меньше 1 000 000');
    } else if (validity.valueMissing) {
      evt.target.setCustomValidity('Обязательное поле для заполнение');
    } else {
      evt.target.setCustomValidity('');
    }
  });
  formPriceElement.addEventListener('input', (evt) => {
    evt.target.reportValidity();
  });

  formRoomNumberElement.addEventListener('change', (evt) => {
    chooseCapacityOption(evt.target);
  });
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

chooseMinPrice(formTypeElement.value);

export {
  setAdFormHandlers,
  disableAdForm,
  enableAdForm,
  setValueAddressInput
};
