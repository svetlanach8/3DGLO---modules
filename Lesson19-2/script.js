'use strict';

let date = new Date();
let hours = date.getHours();
let day = date.getDay() - 1;
let weekDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let time = date.toLocaleTimeString('en');
let deadline = new Date(date.getFullYear() + 1, 0, 1).getTime();
let dateNow = date.getTime();
let dateNewYear = Math.floor((deadline - dateNow) / 1000 / 60 / 60 / 24);

const blockTimesDay = document.createElement('p');
const blockWeekDay = document.createElement('p');
const blockTime = document.createElement('p');
const blockNewYear = document.createElement('p');

document.body.append(blockTimesDay);
document.body.append(blockWeekDay);
document.body.append(blockTime);
document.body.append(blockNewYear);

if (hours >= 23 && hours < 4) {
  blockTimesDay.textContent = 'Доброй ночи';
} else if (hours >= 4 && hours < 11) {
  blockTimesDay.textContent = 'Доброе утро';
} else if (hours >= 11 && hours < 18) {
  blockTimesDay.textContent = 'Добрый день';
} else {
  blockTimesDay.textContent = 'Добрый вечер';
}

blockWeekDay.textContent = `Сегодня: ${weekDay[day]}`;
blockTime.textContent = `Текущее время: ${time}`;
blockNewYear.textContent = `До нового года осталось ${dateNewYear} дней`;
