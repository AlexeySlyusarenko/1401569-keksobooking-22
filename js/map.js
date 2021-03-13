import {
  DefaultCoord,
  MainPinIconSize
} from './const.js';

import {
  enableMapFilter
} from './map-filter.js';

import {
  enableAdForm,
  setValueAddressInput
} from './ad-form.js';

import {
  createCardElement
} from './card.js';

const L = window['L'];
const map = L.map('map-canvas');
let mainPin;
let pins = [];

const createMap = () => {
  map
    .on('load', () => {
      enableMapFilter();
      enableAdForm();
    })
    .setView({
      lat: DefaultCoord.LAT,
      lng: DefaultCoord.LNG,
    }, 9);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  createMainMarker();
};

const createMainMarker = () => {
  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [MainPinIconSize.WIDTH, MainPinIconSize.HEIGHT],
    iconAnchor: [MainPinIconSize.WIDTH / 2, MainPinIconSize.HEIGHT],
  });

  mainPin = L.marker({
    lat: DefaultCoord.LAT,
    lng: DefaultCoord.LNG,
  },
  {
    icon: mainPinIcon,
    draggable: true,
  },
  );

  mainPin.addTo(map);
  setValueAddressInput(`${DefaultCoord.LAT}, ${DefaultCoord.LNG}`);
  mainPin.on('move', (evt) => {
    setValueAddressInput(`${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`);
  });
};

const setDefaultPositionMainPin = () => {
  mainPin.setLatLng(L.latLng(DefaultCoord.LAT, DefaultCoord.LNG));
  setValueAddressInput(`${DefaultCoord.LAT}, ${DefaultCoord.LNG}`);
};

const createMarker = (dataCard) => {
  const pinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [MainPinIconSize.WIDTH, MainPinIconSize.HEIGHT],
    iconAnchor: [MainPinIconSize.WIDTH / 2, MainPinIconSize.HEIGHT],
    popupAnchor: [0, - MainPinIconSize.HEIGHT / 2],
  });

  const pin = L.marker({
    lat: dataCard.location.lat,
    lng: dataCard.location.lng,
  },
  {
    icon: pinIcon,
  },
  );

  pin
    .addTo(map)
    .bindPopup(
      createCardElement(dataCard),
    );

  pins.push(pin);
};

const createMarkers = (dataCards) => {
  dataCards.forEach((value) => {
    createMarker(value);
  });
};


const removeMarkers = () => {
  pins.forEach((element) => {
    element.remove();
  });
  pins = [];
};

export {
  createMap,
  createMarker,
  createMarkers,
  removeMarkers,
  setDefaultPositionMainPin
};
