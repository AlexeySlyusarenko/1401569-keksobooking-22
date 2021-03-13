import {
  Type
} from './const.js';

import {
  disableForm,
  enableForm
} from './utils-form.js'

const mapFilterElement = document.querySelector('.map__filters');
const housingFeaturesElement = mapFilterElement.querySelector('#housing-features');

const disableMapFilter = () => {
  disableForm(mapFilterElement, 'fieldset', 'select');
}

const enableMapFilter = () => {
  enableForm(mapFilterElement, 'fieldset', 'select');
}

const resetFilter = () => {
  const filterSelectElements = mapFilterElement.querySelectorAll('select');
  filterSelectElements.forEach((element) => element.value = Type.ANY);

  const inputhousingFeaturesElements = housingFeaturesElement.querySelectorAll('input');
  inputhousingFeaturesElements.forEach((element) => element.checked = false);
};

const initFilter = () => {
  disableMapFilter();
  resetFilter();
}

export {
  disableMapFilter,
  enableMapFilter,
  resetFilter,
  initFilter
};
