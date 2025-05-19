const scaleValueInput = document.querySelector('.scale__control--value'); // отображение процентов
const scaleSmallerBtn = document.querySelector('.scale__control--smaller'); // минус
const scaleBiggerBtn = document.querySelector('.scale__control--bigger'); // плюсик
const previewImage = document.querySelector('.img-upload__preview img'); // фотка

const SCALE_STEP = 25; // шаг в 25
const SCALE_MIN = 25; // минимальный процент
const SCALE_MAX = 100; // максимальный процент
let currentScale = 100; // изначальное значение

const updateScale = (newScale) => { // функция изменения размера картинки
  currentScale = Math.min(Math.max(newScale, SCALE_MIN), SCALE_MAX); // получаем цифру в инете нашла не понимаю до конца
  console.log(currentScale);

  scaleValueInput.value = `${currentScale}%`; // записываем новое значение в инпут
  previewImage.style.transform = `scale(${currentScale / 100})`; // перезаписываем размер картинки
};

scaleSmallerBtn.addEventListener('click', () => {
  updateScale(currentScale - SCALE_STEP); // изначальная цифра минус шаг
});

scaleBiggerBtn.addEventListener('click', () => {
  updateScale(currentScale + SCALE_STEP); // изначальная цифра плюс щаг
});

// по умолчанию значение 100
updateScale(currentScale);
