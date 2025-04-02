const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [
  'Артем',
  'Андрей',
  'Ян',
  'Анна',
  'Анастасия',
  'Яна'
];

const DESCRIPTION = [
  'Это я что-то делаю',
  'Это я что-то ем',
  'Это я гуляю'
];

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

const createBlockObjects = function (min, max) {
  const allObjects = [];

  for (let i = min; i <= max; i++) {
    const newObject = {
      id: i,
      url: `photos/${getRandomInteger(1, 25)}.jpg`,
      description: getRondomIndex(DESCRIPTION),
      likes: getRandomInteger(15, 200),
      comments: [],
    };
    const numberOfComments = getRandomInteger(0, 30);
    for (let j = 1; j <= numberOfComments; j++) {
      const newComment = {
        id: j,
        avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
        message: getRondomIndex(MESSAGE),
        name: getRondomIndex(NAME)
      };
      newObject.comments.push(newComment);
    }

    allObjects.push(newObject);
  }

  return allObjects;
};

console.log(createBlockObjects(1, 25));
