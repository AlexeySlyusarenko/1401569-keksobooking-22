import {
  initForm
} from './ad-form.js';

import {
  initFilter
} from './map-filter.js';

import {
  createMap,
  createMarkers
} from './map.js';

import {
  getData
} from './net.js';

import {
  showFaultLoadPopup
} from './popup.js';

import {
  setCards
} from './data.js';

initForm();
initFilter();

createMap();

getData((cards) => {
  createMarkers(cards);
  setCards(cards);
}, showFaultLoadPopup);

document.addEventListener('keydown', (evt) => {
  const mainElement = document.querySelector('main');
  if(evt.key === ('Escape' || 'ESC')) {
    const popupElement = mainElement.querySelector('.success') || mainElement.querySelector('.error');
    
    if(popupElement) {
      evt.preventDefault();
      popupElement.remove();
    }
  }
});
