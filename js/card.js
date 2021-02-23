import {Type} from './const.js';

const createCardElement = (data) => {
  const {author, offer} = data;
  const cardTemplate = document.querySelector('#card')
    .content
    .querySelector('.popup');

  const cardElement = cardTemplate.cloneNode(true);

  author.avatar ?
    cardElement.querySelector('.popup__avatar').src = author.avatar :
    cardElement.querySelector('.popup__avatar').classList.add('visually-hidden');
  
  offer.title ?
    cardElement.querySelector('.popup__title').textContent = offer.title :
    cardElement.querySelector('.popup__title').classList.add('visually-hidden');
  
  offer.address ?
    cardElement.querySelector('.popup__text--address').textContent = offer.address :
    cardElement.querySelector('.popup__text--address').classList.add('visually-hidden');

  offer.price ?
    cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь` :
    cardElement.querySelector('.popup__text--price').classList.add('visually-hidden');

  switch (offer.type) {
    case Type.FLAT:
      cardElement.querySelector('.popup__type').textContent = 'Квартира';
      break;
    case Type.HOUSE:
      cardElement.querySelector('.popup__type').textContent = 'Дом';
      break;
    case Type.PALACE:
      cardElement.querySelector('.popup__type').textContent = 'Дворец';
      break;
    case Type.BUNGALOW:
      cardElement.querySelector('.popup__type').textContent = 'Бунгало';
      break;
    default:
      cardElement.querySelector('.popup__type').classList.add('visually-hidden');
  }

  offer.rooms && offer.guests ?
    cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат${offer.rooms === 1 ? 'а' : offer.rooms > 4 ? '' : 'ы'} для ${offer.guests}  гост${offer.guests === 1 ? 'я' : 'ей'}` :
    cardElement.querySelector('.popup__text--capacity').classList.add('visually-hidden');

  offer.checkin && offer.checkout ?
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}` :
    cardElement.querySelector('.popup__text--time').classList.add('visually-hidden');

  offer.description ?
    cardElement.querySelector('.popup__description').textContent = offer.description :
    cardElement.querySelector('.popup__description').classList.add('visually-hidden');

  if (offer.features && offer.features.length) {
    const popupFeatureList = cardElement.querySelector('.popup__features');
    while (popupFeatureList.firstChild) {
      popupFeatureList.removeChild(popupFeatureList.firstChild);
    }
    const popupFeatureListFragment = document.createDocumentFragment();

    offer.features.forEach((value) => {
      const popupFeatureElement = document.createElement('li');

      popupFeatureElement.classList.add('popup__feature');
      popupFeatureElement.classList.add(`popup__feature--${value}`);
      popupFeatureListFragment.appendChild(popupFeatureElement);
    });
    popupFeatureList.appendChild(popupFeatureListFragment);
  } else {
    cardElement.querySelector('.popup__features').classList.add('visually-hidden');
  }

  if (offer.photos && offer.photos.length) {
    const popupPhotoList = cardElement.querySelector('.popup__photos');
    while (popupPhotoList.firstChild) {
      popupPhotoList.removeChild(popupPhotoList.firstChild);
    }

    const popupPhotoListFragment = document.createDocumentFragment();

    offer.photos.forEach((value) => {
      const popupPhotoElement = document.createElement('img');

      popupPhotoElement.src = value;
      popupPhotoElement.width = 45;
      popupPhotoElement.height = 40;
      popupPhotoElement.alt = 'Фотография жилья';
      popupPhotoListFragment.appendChild(popupPhotoElement);
    });
    popupPhotoList.appendChild(popupPhotoListFragment);
  } else {
    cardElement.querySelector('.popup__photos').classList.add('visually-hidden');
  }

  return cardElement;
}

export {
  createCardElement
};
