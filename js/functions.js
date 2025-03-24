// Функция для проверки длины строки.
const getSizeLenght = (maxString = '', maxLength = 1) => maxString.length <= maxLength;
// console.log(getSizeLenght('проверяемая строка', 18)); // true
// console.log(getSizeLenght('проверяемая стро', 20)); // true
// console.log(getSizeLenght('проверяемая строк', 4)); // false

// Функция для проверки, является ли строка палиндромом.
const getPolydromeString = (chechString) => {
  const string = chechString.replaceAll(' ', '').toLowerCase();
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result === string;
};
// console.log(getPolydromeString('топот')); // true
// console.log(getPolydromeString('ДовОд')); // true
// console.log(getPolydromeString('Кекс')); // false

// Дополнительное задание
const getNumberExtraction = (input) => {
  const inputString = `${input}`; // любое входящее значение будет превращаться в строку
  // это нужно для таких значений пример console.log(getNumberExtraction(123))
  let result = '';
  for (let i = 0; i <= inputString.length - 1; i++) {
    const parsedInt = parseInt(inputString[i], 10);
    if (Number.isNaN(parsedInt)) {
      continue;
    }
    result += inputString[i];
  }
  if (result.length === '') { // если функция отработала и в переданных значениях в функцию не было
  // числа в стороке, то функция ничего не запишет в пустую строку, значит она не нашла число, а значит
  // возвращает NaN, пример console.log(getNumberExtraction('gkhg'))
  // в задании просят вернуть именно NaN
    return NaN;
  }
  return result;
};

// console.log(getNumberExtraction('1a2b3c')); //'1a2b3c'
// console.log(getNumberExtraction('gkhg')); //'gkhg'
// console.log(getNumberExtraction(123)); //123
