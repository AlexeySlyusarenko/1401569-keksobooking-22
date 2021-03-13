const getMessageFromStatusCodes = (error) => {
  const statusCode = error.match(/\d\d\d$/gi);
  const message = 'Ошибка загрузки данных с сервера.'

  if(statusCode === null) {
    return message;
  }
  
  return `${message} Код ошибки: ${statusCode}.`;
}

const getData = (onSuccess, onFault) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(response.status);
    })
    .then((data) => {
      onSuccess(data);

      return data;
    })
    .catch((err) => {
      const message = getMessageFromStatusCodes(err.toString());

      onFault(message);
    });
}

const sendData = (body, onSuccess, onFault) => {
  fetch('https://22.javascript.pages.academy/keksobooking', { method: 'POST', body })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(response.status);
    })
    .then((json) => {
      onSuccess(json);
    })
    .catch((err) => {
      onFault(err);
    });
}

export {
  getData,
  sendData
}
