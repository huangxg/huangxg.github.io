var bao = bao || {};

bao.timer = (() => {
  function getTime(timer) {
    let invalidMsg = `Inavlid time in ${timer.id}`,
        times = timer.val().split(':');

    if (times.length > 2) {
      alert(invalidMsg);
    } else if (times.length == 2) {
      let min = parseInt(times[0]),
          sec = parseInt(times[1]);
      return 60 * min + sec; 
    } else {
      return parseInt(times[0]);
    }
  }

  function setTime(timer, seconds) {
    let sec = seconds % 60,
        min = (seconds - sec) / 60;

    if (sec < 10) {
      sec = '0' + sec;
    }
    timer.val(`${min}:${sec}`);
  }

  function startTimer(timer, start) {
    return setInterval(() => {
      this.setTime(timer, ++start);
    }, 1000);
  }

  function countUp(seconds, callback) {
    return setTimeout(() => {
      callback();
    }, 1000 * seconds);
  }

  function countDown(timer, seconds, callback) {
    let interval = setInterval(() => {
      if (seconds > 0) {
        this.setTime(timer, --seconds);
      } else {
        clearInterval(interval);
        callback();
      }
    }, 1000);
  }

  return {
    getTime: getTime,
    setTime: setTime,
    startTimer: startTimer,
    countUp: countUp,
    countDown: countDown,
  };
})();
