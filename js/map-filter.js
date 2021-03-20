import {
  NUMBER_SHOW_PIN,
  TYPE_ANY,
  FieldFormFilter,
  TypeHousing
} from './const.js';

import {
  disableForm,
  enableForm
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

const modifyPins = (pin, formData, maxNumberPin) => {
  let i = 1;

  return pin.filter((pinData) => {
    if (i > maxNumberPin) {
      return false;
    }

    i++;
    
    for (const field of formData.entries()) {
      const nameField = field[0].split('-')[1] || field[0].split('-')[0];

      if(field[1] === TYPE_ANY) {
        return true;
      }

      switch(nameField) {
        case FieldFormFilter.TYPE:
          if (pinData.offer[nameField], pinData.offer[nameField] !== field[1]) {
            return false;
          }
          break;
      }
    }

    return true;
  });
};

const setFilterHandlers = () => {
  mapFilterElement.addEventListener('change', (evt) => {
    evt.preventDefault();

    const pins = modifyPins([...getCards()], new FormData(mapFilterElement), NUMBER_SHOW_PIN);

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
