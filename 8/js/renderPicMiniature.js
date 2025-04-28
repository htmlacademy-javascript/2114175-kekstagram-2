const picturesContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;

export const renderPicMiniature = (dataPictures) => {
  const fragment = document.createDocumentFragment();

  dataPictures.forEach(({id, url, description, likes, comments}) => {
    const clonePicture = templateFragment.cloneNode(true);
    const picture = clonePicture.querySelector('.picture');

    picture.querySelector('img').src = url;
    picture.querySelector('img').alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.setAttribute('data-id', id);

    fragment.append(picture);
  });
  picturesContainer.append(fragment);
};
