import {getRandomInteger, getRondomIndex} from './data.js';

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

export {createBlockObjects};
