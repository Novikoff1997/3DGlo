const timer = (deadline) => {
  const timerDays = document.querySelector("#timer-days");
  const timerHours = document.querySelector("#timer-hours");
  const timerMinutes = document.querySelector("#timer-minutes");
  const timerSeconds = document.querySelector("#timer-seconds");

  const getTimeRemaning = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaning = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaning / 60 / 60 / 24);
    let hours = Math.floor((timeRemaning / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaning / 60) % 60);
    let seconds = Math.floor(timeRemaning % 60);

    return { timeRemaning, days, hours, minutes, seconds };
  };

  const setZero = (value) => {
    return value.toString().padStart(2, "0");
  };

  const updateClock = () => {
    let getTime = getTimeRemaning();
    timerDays.textContent = setZero(getTime.days);
    timerHours.textContent = setZero(getTime.hours);
    timerMinutes.textContent = setZero(getTime.minutes);
    timerSeconds.textContent = setZero(getTime.seconds);
  };

  const startTimer = (timeRemaning) => {
    if (timeRemaning > 0) {
      setInterval(updateClock, 1000);
    } else {
      timerDays.textContent = "00";
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };

  updateClock();
  startTimer(getTimeRemaning().timeRemaning);
};

export default timer;
