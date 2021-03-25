const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const setPreviewImageHandler = (uploadButtomElement, previewElement) => {
  const inputFileElement = uploadButtomElement.querySelector('input') || uploadButtomElement;

  inputFileElement.addEventListener('change', () => {
    const file = inputFileElement.files[0];
    const fileName = file.name.toLowerCase();
      
    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });
       
    if (matches) {
      const reader = new FileReader();
        
      reader.addEventListener('load', () => {
        let imgElement;

        if(previewElement.querySelector('img')) {
          imgElement = previewElement.querySelector('img');
          imgElement.src = reader.result;
        } else {
          previewElement.style.backgroundPosition = 'center center'
          previewElement.style.backgroundRepeat = 'no-repeat'
          previewElement.style.backgroundSize = 'contain';
          previewElement.style.backgroundImage = `url(${reader.result})`;
        }
      });
  
      reader.readAsDataURL(file);
    }
  });
}

export {
  setPreviewImageHandler
}