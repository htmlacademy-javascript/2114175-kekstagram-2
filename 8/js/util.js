const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRondomIndex = function (array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomItem = array[randomIndex];
  return randomItem;
};

// Функция для проверки длины строки.
const getSizeLenght = (maxString = '', maxLength = 1) => maxString.length <= maxLength;

// Функция для проверки, является ли строка палиндромом.
const getPolydromeString = (chechString) => {
  const string = chechString.replaceAll(' ', '').toLowerCase();
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result === string;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, getRondomIndex, getSizeLenght, getPolydromeString, isEscapeKey};
