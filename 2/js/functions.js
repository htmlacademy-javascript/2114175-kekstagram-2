// Функция для проверки длины строки.
const getSizeLenght = (maxString, maxLength) => {
  while (maxString.length <= maxLength) {
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
  while (result === caseString) {
    return true;
  }

  return false;
};
// console.log(getPolydromeString('топот'));
// console.log(getPolydromeString('ДовОд'));
// console.log(getPolydromeString('Кекс'));

// Дополнительное задание
const getNumberExtraction = (input) => {
  const inputString = `${input}`;
  let result = '';
  for (let i = 0; i <= inputString.length - 1; i++) {
    const parsedInt = parseInt(inputString[i], 10);
    if (Number.isNaN(parsedInt)) {
      continue;
    }
    result += inputString[i];
  }
  if (result.length === '') {
    return NaN;
  }
  return result;
};

// console.log(getNumberExtraction('1a2b3c')); //'1a2b3c'
// console.log(getNumberExtraction('gkhg')); //'gkhg'
// console.log(getNumberExtraction(123)); //123
