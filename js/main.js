import {
  initForm
} from './ad-form.js';

import {
  initFilter
} from './map-filter.js';

import {
  createMap,
} from './map.js';

initForm();
initFilter();

createMap();

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
