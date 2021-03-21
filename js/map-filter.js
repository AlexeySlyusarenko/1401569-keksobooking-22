import {
  NUMBER_SHOW_PIN,
  TypeHousing
} from './const.js';

import {
  disableForm,
  enableForm,
  checkField
} from './utils-form.js';

import {
  createMarkers,
  removeMarkers
} from './map.js';

import {
  getCards
} from './data.js';

const mapFilterElement = document.querySelector('.map__filters');
const housingFeaturesElement = mapFilterElement.querySelector('#housing-features');
const filterSelectElements = mapFilterElement.querySelectorAll('select');

const disableMapFilter = () => {
  disableForm(mapFilterElement, 'fieldset', 'select');
}

const enableMapFilter = () => {
  enableForm(mapFilterElement, 'fieldset', 'select');
}

const resetFilter = () => {
  filterSelectElements.forEach((element) => element.value = TypeHousing.ANY);

  const inputHousingFeaturesElements = housingFeaturesElement.querySelectorAll('input');
  inputHousingFeaturesElements.forEach((element) => element.checked = false);
};

const getPinsBySelect = (pin) => {
  return pin.filter((pinData) => {    
    if(checkField(mapFilterElement, pinData)) {
      return true;
    }

    return false;
  });
};

const getPinsByFeatures = (elementForm, pins = []) => {
  const featuresElement = elementForm.querySelector('#housing-features');
  const inputElements = featuresElement.querySelectorAll('input');
  const features = [];

  for (const element of inputElements) {
    if(element.checked) {
      features.push(element.value);
    }
  }

  if(!features.length) {
    return pins;
  }

  pins.forEach((pin) => {
    pin.featuresWeidth = 0

    features.forEach((feature) => {
      if(pin.offer.features.includes(feature)) {
        pin.featuresWeidth++;
      }
    })
  });

  return pins
    .sort((currentPin, previewsPin) => {
      return previewsPin.featuresWeidth - currentPin.featuresWeidth;
    })
    .filter((pin) => {
      return pin.featuresWeidth;
    });
}

const setFilterHandlers = () => {
  mapFilterElement.addEventListener('change', (evt) => {
    evt.preventDefault();

    let pins = getPinsBySelect([...getCards()]);

    pins = getPinsByFeatures(mapFilterElement, [...pins]);

    if(pins.length > NUMBER_SHOW_PIN) {
      pins.slice(0, NUMBER_SHOW_PIN);
    }

    removeMarkers();
    createMarkers(pins);
  });
}

const initFilter = () => {
  disableMapFilter();
  setFilterHandlers();
  resetFilter();
}

export {
  disableMapFilter,
  enableMapFilter,
  resetFilter,
  initFilter
};
