import { isEscapeKey } from './util.js';

const form = document.querySelector('.img-upload__form'); // форма
const uploadInput = form.querySelector('.img-upload__input'); // красная кнопка загрузить
const overlay = form.querySelector('.img-upload__overlay'); // модалка с фоткой и фильтрами
const cancelBut = form.querySelector('.img-upload__cancel'); // крестик
const hashtagsInput = form.querySelector('.text__hashtags'); // инпут хэштега
const commentInput = form.querySelector('.text__description'); // инпут комментария

uploadInput.addEventListener('change', () => { // нажатие на 0
  openFormModal(); //
});

const onDocumentKeydown = (evt) => { //закрытие на Esc
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormModal();
  }
};

function openFormModal () { // открытие модалки
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeFormModal () { // закрытие модалки
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

cancelBut.addEventListener('click', () => { // закрытие на крестик
  closeFormModal();
});

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:  'img-upload__field-wrapper',
  errorTextClass: 'form-error',
});

const validateHashtags = (value) => {
  if (!value.trim()) { // необязательное поле
    return true;
  }

  const hashtags = value.trim().split(/\s+/); //делаем массив строк разбитый по пробелам
  console.log(hashtags);
  if (hashtags.length > 5) { // не больше 5 хэштегов
    return false;
  }

  const lowerTags = hashtags.map((tag) => tag.toLowerCase()); // проходимся по массиву и все приводим к нижнему регистру
  const uniqueTags = new Set(lowerTags); // создаем уникальную коллекцию на основе массива выше
  if (uniqueTags.size !== hashtags.length) { // если коллекция не совпадает с количеством в инпуте
    return false;
  }

  const hashtagPattern = /^#[a-zA-Zа-яА-ЯёЁ0-9]{1,19}$/; // валидные символы
  return hashtags.every((tag) => hashtagPattern.test(tag)); //
};

// валидация хэштегов
pristine.addValidator(
  hashtagsInput, // инпут хэштега
  validateHashtags, // функция проверки
  'Неверный формат хэштегов: до 5, через пробел, без спецсимволов, каждый до 20 символов, без повторов',
  2, false
);

// проверяем чтоб не больше 140 символов
const validateComments = (value) => value.length <= 140;

// валидация комментов
pristine.addValidator(
  commentInput, // инпут текста
  validateComments,
  'Комментарий не должен превышать 140 символов',
  2,
  false
);

// Блокировка закрытия формы по Esc при фокусе в полях нашла в инете код
[hashtagsInput, commentInput].forEach((input) => {
  input.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  });
});

form.addEventListener('submit', (evt) => { //отправка формы
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
