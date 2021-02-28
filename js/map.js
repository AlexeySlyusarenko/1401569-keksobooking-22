import {
  BeginCoord,
  MainPinIconSize
} from './const.js';

import {
  enableMapFilter
} from './map-filter.js';

import {
  enableAdForm,
  setValueAddressInput
} from './ad-form.js';

const L = window['L'];
const map = L.map('map-canvas');

const createMap = () => {
  map
    .on('load', () => {
      enableMapFilter();
      enableAdForm();
    })
    .setView({
      lat: BeginCoord.BEGINLAT,
      lng: BeginCoord.BEGINLNG,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: '/img/main-pin.svg',
    iconSize: [MainPinIconSize.WIDTH, MainPinIconSize.HEIGHT],
    iconAnchor: [MainPinIconSize.WIDTH / 2, MainPinIconSize.HEIGHT],
  });

  const marker = L.marker({
    lat: BeginCoord.BEGINLAT,
    lng: BeginCoord.BEGINLNG,
  },
  {
    icon: mainPinIcon,
    draggable: true,
  },
  );

  marker.addTo(map);
  setValueAddressInput(`${BeginCoord.BEGINLAT}, ${BeginCoord.BEGINLNG}`);
  marker.on('moveend', (evt) => {
    setValueAddressInput(`${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`);
  });
};

const createMarker = (location, cardElement) => {
  const pinIcon = L.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [MainPinIconSize.WIDTH, MainPinIconSize.HEIGHT],
    iconAnchor: [MainPinIconSize.WIDTH / 2, MainPinIconSize.HEIGHT],
    popupAnchor: [0, - MainPinIconSize.HEIGHT / 2],
  });

  const markerPin = L.marker({
    lat: location.x,
    lng: location.y,
  },
  {
    icon: pinIcon,
  },
  );

  markerPin
    .addTo(map)
    .bindPopup(
      cardElement,
    );
}

export {
  createMap,
  createMarker
};
