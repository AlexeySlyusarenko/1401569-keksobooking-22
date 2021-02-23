import {
  NUMBER_MOCK
} from './const.js';

import {
  generateMocks
} from './mocks.js';

import {
  createCardElement
} from './card.js'

const mocks = generateMocks(NUMBER_MOCK);

const mapCanvasElement = document.querySelector('#map-canvas');

mapCanvasElement.appendChild(createCardElement(mocks[0]));
