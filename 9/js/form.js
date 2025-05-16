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
  if (!value.trim()) { // хэштеги не обязтельны
    return true;
  }

  const hashtags = value.trim().split(/\s+/); //делаем массив строк разбитый по пробелам

  const hashtagPattern = /^#[a-zA-Zа-яА-ЯёЁ0-9]{1,19}$/; // валидные символы

  for (const tag of hashtags) {
    if (!tag.startsWith('#')) {
      return false;
    } // Должен начинаться с #
    if (tag === '#') {
      return false;
    } // Не только #
    if (!hashtagPattern.test(tag)) {
      return false;
    } // Только буквы/цифры, не более 20 символов
  }


  const maxHashtags = 5;
  if (hashtags.length > maxHashtags) { // не больше 5 хэштегов
    return false;
  }

  const lowerTags = hashtags.map((tag) => tag.toLowerCase()); // проходимся по массиву и все приводим к нижнему регистру
  const uniqueTags = new Set(lowerTags); // создаем уникальную коллекцию на основе массива выше
  if (uniqueTags.size !== hashtags.length) { // если коллекция не совпадает с количеством в инпуте
    return false;
  }

  return hashtags.every((tag) => hashtagPattern.test(tag));

};

const getHashtagsErrorMessage = (value) => {
  if (!value.trim()) {
    return '';
  }

  const hashtags = value.trim().split(/\s+/);
  const maxHashtags = 5;

  if (hashtags.length > maxHashtags) {
    return 'Нельзя указать больше пяти хэштегов';
  }

  const lowerCaseTags = hashtags.map((tag) => tag.toLowerCase());

  const uniqueTags = new Set(lowerCaseTags);
  if (uniqueTags.size !== hashtags.length) {
    return 'Один и тот же хэштег не может быть использован дважды';
  }

  const hashtagPattern = /^#[a-zа-яё0-9]{1,19}$/i;

  for (const tag of hashtags) {
    if (!tag.startsWith('#')) {
      return 'Хэштег должен начинаться с символа #';
    }
    if (tag === '#') {
      return 'Хэштег не может состоять только из одной решётки';
    }
    if (!hashtagPattern.test(tag)) {
      return 'Хэштег должен содержать только буквы и цифры и быть не длиннее 20 символов';
    }
  }
  return '';
};

// валидация хэштегов
pristine.addValidator(
  hashtagsInput, // инпут хэштега
  validateHashtags, // функция проверки
  getHashtagsErrorMessage // сообщения с ошибками
);

// условия для комментов
const validateComments = (value) => {
  if (!value.trim()) {
    return true;
  } // Хэштеги необязательны

  const comment = value.trim();
  const maxSymbol = 140;

  if (comment.length === maxSymbol) {
    return false;
  }

};

const getComentssErrorMessage = (value) => {
  if (!value.trim()) {
    return '';
  }

  const comment = value.trim();
  const maxSymbol = 140;

  if (comment.length === maxSymbol) {
    return 'Длина комментария не может превышать 140 символов';
  }

};

// валидация комментов
pristine.addValidator(
  commentInput, // инпут текста
  validateComments, // функция валидации
  getComentssErrorMessage // тексты ошибок
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
