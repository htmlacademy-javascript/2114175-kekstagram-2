const picturesContainer = document.querySelector('.pictures'); // блок с рандомными фотографиями
const bigPic = document.querySelector('.big-picture'); // модалка для большого фото

const toggleClassModal = function () {
  bigPic.classList.toggle('hidden');
};

picturesContainer.addEventListener('click', () => {
  toggleClassModal();
});
