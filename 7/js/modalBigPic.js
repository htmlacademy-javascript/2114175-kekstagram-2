const pictures = document.querySelector('.pictures'); // блок с рандомными фотографиями
const bigPic = document.querySelector('.big-picture'); // модалка для большого фото
const smallPic = pictures.querySelector('.picture'); // все маленькие фотки
const cancelBut = bigPic.querySelector('.cancel'); // крестик в модалке

const toggleClassModal = function () {
  bigPic.classList.toggle('hidden');
};

cancelBut.addEventListener('click', () => {
  toggleClassModal();
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    toggleClassModal();
  }
});

pictures.addEventListener('click', () => {
  toggleClassModal();
  bigPic.querySelector('.big-picture__img img').src = smallPic.querySelector('.picture__img').src;
});
