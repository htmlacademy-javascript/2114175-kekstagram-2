// Функция для проверки длины строки.
const getSizeLenght = (maxString, maxLength) => {
  if (maxString.length <= maxLength) {
    return true;
  }
  return false;
};
// console.log(getSizeLenght('проверяемая строка', 18));
// console.log(getSizeLenght('проверяемая стро', 20));
// console.log(getSizeLenght('проверяемая строк', 4));

// Функция для проверки, является ли строка палиндромом.
const getPolydromeString = (chechString) => {
  let replaceString = chechString.replaceAll();
  let caseString = replaceString.toLowerCase();
  let result = '';
  for (let i = caseString.length - 1; i >= 0; i--) {
    result += caseString[i];
  }
  if (result === caseString) {
    return true;
  }

  return false;
};
// console.log(getPolydromeString('топот'));
// console.log(getPolydromeString('ДовОд'));
// console.log(getPolydromeString('Кекс'));

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
    return NaN;
  }
  return result;
};

// console.log(getNumberExtraction('1a2b3c')); //'1a2b3c'
// console.log(getNumberExtraction('gkhg')); //'gkhg'
// console.log(getNumberExtraction(123)); //123
