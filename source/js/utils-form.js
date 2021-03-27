import {
  TYPE_ANY,
  TypePrice
} from './const.js';

const disableForm = (formElement, ...elements) => {
  formElement.classList.add('ad-form--disabled');

  elements.forEach((value) => {
    formElement
      .querySelectorAll(value)
      .forEach((element) => {
        element.disabled = true;
      });
  });
};

const enableForm = (formElement, ...elements) => {
  formElement.classList.remove('ad-form--disabled');

  elements.forEach((value) => {
    formElement
      .querySelectorAll(value)
      .forEach((element) => {
        element.disabled = false;
      });
  });
};

const getField = (element) => {
  return {
    name: element.name.split('-')[1] || element.name.split('-')[0],
    value: element.value,
  };
};

const checkTypeField = (elementForm, pinData) => {
  const element = elementForm.querySelector('#housing-type');
  
  if(element.value === TYPE_ANY) {
    return true;
  }

  const field = getField(element);

  return pinData.offer[field.name] === field.value;
};

const checkPriceField = (elementForm, pinData) => {
  const element = elementForm.querySelector('#housing-price');
  
  if(element.value === TYPE_ANY) {
    return true;
  }

  const field = getField(element);

  switch (field.value) {
    case TypePrice.LOW:
      if (pinData.offer[field.name] < TypePrice.LOW_PRICE) {
        return true;
      }
      break;
    case TypePrice.HIGH:
      if (pinData.offer[field.name] > TypePrice.HIGH_PRICE) {
        return true;
      }
      break;
    case TypePrice.MIDDLE:
      if (
        pinData.offer[field.name] >= TypePrice.LOW_PRICE &&
        pinData.offer[field.name] <= TypePrice.HIGH_PRICE
      ) {
        return true;
      }
      break;
  }

  return false;
};

const checkRoomsField = (elementForm, pinData) => {
  const element = elementForm.querySelector('#housing-rooms');

  if(element.value === TYPE_ANY) {
    return true;
  }

  const field = getField(element);

  return pinData.offer[field.name].toString() === field.value;
};

const checkGuestsField = (elementForm, pinData) => {
  const element = elementForm.querySelector('#housing-guests');

  if(element.value === TYPE_ANY) {
    return true;
  }

  const field = getField(element);

  return pinData.offer[field.name].toString() === field.value;
};

const checkField = (formElement, data) => (
  checkTypeField(formElement, data) &&
  checkPriceField(formElement, data) &&
  checkRoomsField(formElement, data) &&
  checkGuestsField(formElement, data)
);

export {
  disableForm,
  enableForm,
  checkField
}