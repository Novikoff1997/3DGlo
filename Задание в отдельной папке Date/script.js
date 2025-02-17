"use strict";
const hello = document.querySelector("#hello");
const dayOfWeek = document.querySelector("#day-of-week");
const time = document.querySelector("#time");
const ubtilNewYear = document.querySelector("#until-new-year");
let date;

setInterval(() => {
  date = new Date();
});

const getHello = () => {
  const hour = date.getHours();

  if (hour >= 0 && hour <= 4) {
    return "Доброй ночи!";
  } else if (hour > 4 && hour <= 10) {
    return "Доброе утро!";
  } else if (hour > 10 && hour <= 16) {
    return "Добрый день!";
  } else {
    return "Добрый вечер!";
  }
};

const getDayOfWeek = () => {
  let dayIndex = date.getDay();
  const daysOfWeek = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  return `Сегодня: ${daysOfWeek[dayIndex - 1]}`;
};

const getTime = () => {
  return `Текущее время: ${date.toLocaleTimeString("en")}`;
};

const getUntilNewYear = () => {
  let futureDate = new Date("2026 January 1");
  let timeUntilNewYear = Math.floor(futureDate.getTime() - date.getTime());
  let daysUntilNewYear = Math.floor(timeUntilNewYear / 1000 / 60 / 60 / 24);
  return `До нового года осталось ${daysUntilNewYear} дней`;
};

const render = () => {
  hello.textContent = getHello();
  dayOfWeek.textContent = getDayOfWeek();
  time.textContent = getTime();
  ubtilNewYear.textContent = getUntilNewYear();
};

const start = () => {
  setInterval(render, 1000);
};
start();
