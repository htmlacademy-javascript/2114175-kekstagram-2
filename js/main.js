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
  const oneObject = {
    id: '',
    url: '',
    description: '',
    likes: '',
    comments: function () {
      return {
        id: '',
        avatar: '',
        message: '',
        name: ''
      };
    }
  };

  for (let i = 0; i < max; i++) {
    const newObject = Object.assign(oneObject);
    newObject.id = i;
    newObject.url = `photos/${getRandomInteger(1, 25)}.jpg`;
    newObject.description = getRondomIndex(DESCRIPTION);
    newObject.likes = getRandomInteger(15, 200);
    newObject.comments = getRandomInteger(0, 30);
    newObject.comments.id = i;
    newObject.comments.avatar = `img/avatar-${getRandomInteger(1, 6)}.svg`;
    newObject.comments.message = getRondomIndex(MESSAGE);
    newObject.comments.name = getRondomIndex(NAME);
    allObjects.push(newObject);
  }

  return allObjects;
};

console.log(createBlockObjects(1, 25));
