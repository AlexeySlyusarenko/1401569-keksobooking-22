import {
  disableForm,
  enableForm
} from './utils-form.js'

const mapFilterElement = document.querySelector('.map__filters');

const disableMapFilter = () => {
  disableForm(mapFilterElement, 'fieldset', 'select');
}

const enableMapFilter = () => {
  enableForm(mapFilterElement, 'fieldset', 'select');
}

export {
  disableMapFilter,
  enableMapFilter
};
