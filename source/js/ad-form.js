import {
  TypeHousing,
  TypePrice,
  NumberRoom,
  CapacityRoom,
  DefaultForm
} from './const.js';

import {
  sendData
} from './net.js';

import {
  disableForm,
  enableForm
} from './utils-form.js';

import {
  showSuccessPopup,
  showFaultSendPopup
} from './popup.js';

import {
  getCards
} from './data.js';

import {
  createMarkers,
  removeMarkers,
  setDefaultPositionMainPin
} from './map.js';

import {
  setPreviewImageHandler,
  setDefaultAvatarPreview,
  clearPhotoPreview
} from './file-input.js';

import {
  resetFilter
} from './map-filter.js';

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
const formFeatureElements = adFormElement.querySelectorAll('.feature__checkbox');
const formResetElement = adFormElement.querySelector('.ad-form__reset');
const formFieldElement = adFormElement.querySelector('.ad-form__field');
const formPreviewElement = adFormElement.querySelector('.ad-form-header__preview');
const formUploadElement = adFormElement.querySelector('.ad-form__upload');
const formPhotoElement = adFormElement.querySelector('.ad-form__photo');

const setMinPrice = (element, price) => {
  element.placeholder = price;
  element.min = price;
  minPrice = price;
};

let minPrice;

const chooseMinPrice = (value) => {
  switch (value) {
    case TypeHousing.BUNGALOW:
      setMinPrice(formPriceElement, TypePrice.BUNGALOW);
      break;
    case TypeHousing.FLAT:
      setMinPrice(formPriceElement, TypePrice.FLAT);
      break;
    case TypeHousing.HOUSE:
      setMinPrice(formPriceElement, TypePrice.HOUSE);
      break;
    case TypeHousing.PALACE:
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

const disableAdForm = () => {
  disableForm(adFormElement, 'fieldset');
};

const enableAdForm = () => {
  enableForm(adFormElement, 'fieldset');
};

const setValueAddressInput = (value) => {
  formAddressElement.value = value;
}

const resetForm = () => {
  formTitleElement.value = DefaultForm.TITLE;
  formTypeElement.value = TypeHousing.FLAT;
  formPriceElement.value = DefaultForm.PRICE;
  chooseMinPrice(formTypeElement.value);
  formTimeinElement.value = DefaultForm.TIME_IN;
  formTimeoutElement.value = DefaultForm.TIME_OUT;
  formRoomNumberElement.value = DefaultForm.ROOMS;
  chooseCapacityOption(formRoomNumberElement);
  formFeatureElements.forEach((element) => element.checked = false);
};

const setAdFormHandlers = () => {
  formTypeElement.addEventListener('change', (evt) => {
    chooseMinPrice(evt.target.value);
  });

  formTimeinElement.addEventListener('change', changeTimeinHandler);
  formTimeoutElement.addEventListener('change', changeTimeoutHandler);

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

  adFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(new FormData(evt.target), showSuccessPopup, showFaultSendPopup);
  });

  formResetElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetForm();
    resetFilter();
    removeMarkers();
    createMarkers(getCards());
    setDefaultPositionMainPin();
    setDefaultAvatarPreview(formPreviewElement);
    clearPhotoPreview(formPhotoElement);
  });

  setPreviewImageHandler(formFieldElement, formPreviewElement);
  setPreviewImageHandler(formUploadElement, formPhotoElement);
};

const initForm = () => {
  disableAdForm();
  setAdFormHandlers();
  resetForm();
}

export {
  setAdFormHandlers,
  disableAdForm,
  enableAdForm,
  setValueAddressInput,
  resetForm,
  initForm
};
