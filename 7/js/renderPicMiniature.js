import {createBlockObjects} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const dataPictures = createBlockObjects(1, 25);

const fragment = document.createDocumentFragment();

dataPictures.forEach(({url, description, likes, comments}) => {
  const clonePicture = templateFragment.cloneNode(true);
  const picture = clonePicture.querySelector('.picture');

  picture.querySelector('img').src = url;
  picture.querySelector('img').alt = description;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;

  fragment.append(picture);
});
picturesContainer.append(fragment);
