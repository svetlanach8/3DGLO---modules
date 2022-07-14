const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');
  let idInterval;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow= new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {timeRemaining, hours, minutes, seconds}
  }

  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerHours.textContent = editFormat(getTime.hours);
    timerMinutes.textContent = editFormat(getTime.minutes);
    timerSeconds.textContent = editFormat(getTime.seconds);

    if (getTime.timeRemaining <= 0) {
      clearInterval(idInterval);
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  }

  const editFormat = (number) => {
    if (number < 10) {
      return '0' + number
    } else {
      return number
    }
  }

  idInterval = setInterval(updateClock, 1000);
}

export default timer;
