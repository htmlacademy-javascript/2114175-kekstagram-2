import {getRandomInteger, getRondomIndex} from './util.js';

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

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артем',
  'Андрей',
  'Ян',
  'Анна',
  'Анастасия',
  'Яна'
];

const DESCRIPTIONS = [
  'Это я что-то делаю',
  'Это я что-то ем',
  'Это я гуляю'
];

const NUMBERS = [6, 15, 25, 30, 200];

const createBlockObjects = function (min, max) {
  const allObjects = [];

  for (let i = 0; i <= max; i++) {
    const newObject = {
      id: i,
      url: `photos/${getRandomInteger(1, NUMBERS[2])}.jpg`,
      description: getRondomIndex(DESCRIPTIONS),
      likes: getRandomInteger(NUMBERS[1], NUMBERS[4]),
      comments: [],
    };
    const numberOfComments = getRandomInteger(0, NUMBERS[3]);
    for (let j = 1; j <= numberOfComments; j++) {
      const newComment = {
        id: j,
        avatar: `img/avatar-${getRandomInteger(1, NUMBERS[0])}.svg`,
        message: getRondomIndex(MESSAGES),
        name: getRondomIndex(NAMES)
      };
      newObject.comments.push(newComment);
    }

    allObjects.push(newObject);
  }

  return allObjects;
};

//console.log(createBlockObjects(1, 25));
