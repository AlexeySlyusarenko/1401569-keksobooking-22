import { NUMBER_MOCK } from './const.js';
import { generateMocks } from './mocks.js';
import { createCardElement } from './card.js'
import {
  setAdFormHandlers,
  disableAdForm
} from './ad-form.js';

import {
  disableMapFilter
} from './map-filter.js';

import {
  createMap,
  createMarker
} from './map.js';

const mocks = generateMocks(NUMBER_MOCK);

disableAdForm();
setAdFormHandlers();

disableMapFilter();

createMap();

mocks.forEach((value) => {
  createMarker(value.location, createCardElement(value));
});
