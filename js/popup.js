import {
  Message
} from './const.js';

import {
  createMap,
  createMarkers,
  removeMarkers,
  setDefaultPositionMainPin
} from './map.js';

import {
  getData
} from './net.js';

import {
  getCards
} from './data.js';

import {
  resetForm
} from './ad-form.js';

import {
  resetFilter
} from './map-filter.js';

const mapElement = document.querySelector('.map');

const createPopup = (type, message) => {
  const successTemplate = document.querySelector(`#${type}`)
    .content
    .querySelector(`.${type}`);
  const successElement = successTemplate.cloneNode(true);

  successElement.querySelector(`.${type}__message`).innerHTML = message;

  return successElement;
};

const clickFaultLoadButtonHandler = (evt) => {
  evt.preventDefault();

  createMap();
  getData(createMarkers, showFaultLoadPopup);

  evt.target.parentElement.remove();
};

// const clickFaultSendButtonHandler = () => {

// }

const showSuccessPopup = () => {
  const popupElement = createPopup('success', Message.SUCCESS_SEND_FORM);

  const clickPopupHandler = (evt) => {
    evt.preventDefault();
    resetForm();
    resetFilter();
    removeMarkers();
    createMarkers(getCards());
    setDefaultPositionMainPin();
    popupElement.remove();
  };

  mapElement.appendChild(popupElement);

  popupElement.addEventListener('click', clickPopupHandler); 
};

const showFaultLoadPopup = (message) => {
  const popupElement = createPopup('error', message);
  const clickPopupHandler = (evt) => {
    evt.preventDefault();
    popupElement.remove();
  };

  mapElement.appendChild(popupElement);

  popupElement.addEventListener('click', clickFaultLoadButtonHandler);
  popupElement.addEventListener('click', clickPopupHandler);
};

const showFaultSendPopup = () => {
  const popupElement = createPopup('error', Message.ERROR_SEND_FORM);
  const clickPopupHandler = (evt) => {
    evt.preventDefault();
    popupElement.remove();
  };

  mapElement.appendChild(popupElement);

  // popupElement.addEventListener('click', clickFaultSendButtonHandler);
  popupElement.addEventListener('click', clickPopupHandler, true);
};

export {
  showSuccessPopup,
  showFaultLoadPopup,
  showFaultSendPopup
}