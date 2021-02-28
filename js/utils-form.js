const disableForm = (formElement, ...elments) => {
  formElement.classList.add('ad-form--disabled');

  elments.forEach((value) => {
    formElement
      .querySelectorAll(value)
      .forEach((element) => {
        element.disabled = true;
      });
  });
}

const enableForm = (formElement, ...elments) => {
  formElement.classList.remove('ad-form--disabled');

  elments.forEach((value) => {
    formElement
      .querySelectorAll(value)
      .forEach((element) => {
        element.disabled = false;
      });
  });
}

export {
  disableForm,
  enableForm
}