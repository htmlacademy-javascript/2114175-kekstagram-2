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

// 5 раздел 2 часть домашки

const checkWorkTime = function (start, end, startMeeting, meetingtime) {
  const getSplitTime = function (time) {
    return time.split(':').map((arrayItem) => parseInt(arrayItem, 10));
  };

  const startWorkTime = getSplitTime(start);
  const endWorkTime = getSplitTime(end);
  const startMeetingTime = getSplitTime(startMeeting);

  // 1. Проверить что часы начала встречи не раньше часов начала работы. Если равно, то проверяем что минуты не раньше
  if (startMeetingTime[0] < startWorkTime[0]) {
    return false;
  }
  if (startMeetingTime[0] === startWorkTime[0] && startMeetingTime[1] < startWorkTime[1]) {
    return false;
  }
  // 2. Посчитать время окончания встречи. Сделать из meetingMinutes кол-во часов и минут встречи. Прибавить ко времени начала встречи
  const meetingHour = Math.trunc(meetingtime / 60);
  const meetingMinutes = meetingtime - (meetingHour * 60);
  const meetingEndHour = startMeetingTime[0] + meetingHour;
  const meetingEndMinutes = startMeetingTime[1] + meetingMinutes; // todo: минуты не должны быть больше 59


  // 3. Проверить что часы окончания встречи не выходят за рамки окончания рабочего дня (аналогично п1)
  if (meetingEndHour > endWorkTime[0]) {
    return false;
  }

  if (meetingEndHour === endWorkTime[0] && meetingEndMinutes > endWorkTime[1]) {
    return false;
  }

  return true;
};

//console.log(checkWorkTime('08:00', '17:30', '14:00', 90)); // true
// console.log(checkWorkTime('8:0', '10:0', '8:0', 120)); // true
// console.log(checkWorkTime('08:00', '14:30', '14:00', 90)); // false
// console.log(checkWorkTime('14:00', '17:30', '08:0', 90)); // false
// console.log(checkWorkTime('8:00', '17:30', '08:00', 900)); // false
