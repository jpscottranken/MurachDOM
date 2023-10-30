/*
		In this exercise, you'll add a stopwatch 
		feature to the application you created in 
		extra exercise 7-1. 
		
		The stopwatch will display elapsed minutes, 
		seconds, and milliseconds.
 */

"use strict";

const $ = (selector) => document.querySelector(selector);

const padSingleDigit = (num) => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
  const now = new Date();
  let hours = now.getHours();
  let ampm = "AM";

  if (hours > 12) {
    //  Convert from military time
    hours -= 12;
    ampm = "PM";
  } else {
    switch (hours) {
      case 12: //  Noon
        ampm = "PM";
        break;

      case 0: //  Midnight
        hours = 12;
        ampm = "AM";
        break;
    }
  }

  //  Display the time
  $("#hours").textContent = hours;
  $("#minutes").textContent = padSingleDigit(now.getMinutes());
  $("#seconds").textContent = padSingleDigit(now.getSeconds());
  $("#ampm").textContent = ampm;
};

//  Set up stop watch
let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;

const tickStopwatch = () => {
  //  Increment milliseconds by 10 milliseconds
  elapsedMilliseconds += 10;

  //  If milliseconds = 1000, increment seconds
  //  by 1 and reset milliseconds to 0.
  if (elapsedMilliseconds === 1000) {
    ++elapsedSeconds;
    elapsedMilliseconds = 0;
  }

  //  If millseconds = 60, increment minutes
  //  by 1 and reset seconds to 0.
  if (elapsedSeconds === 60) {
    ++elapsedMinutes;
    elapsedSeconds = 0;
  }

  //  Display new stopwatch time
  $("#s_minutes").textContent = padSingleDigit(elapsedMinutes);
  $("#s_seconds").textContent = padSingleDigit(elapsedSeconds);
  $("#s_ms").textContent = elapsedMilliseconds;
};

const startStopwatch = (evt) => {
  evt.preventDefault();
  tickStopwatch();
  stopwatchTimer = setInterval(tickStopwatch, 10);
};

const stopStopwatch = (evt) => {
  evt.preventDefault();
  clearInterval(stopwatchTimer);
};

const resetStopwatch = (evt) => {
  evt.preventDefault();
  clearInterval(stopwatchTimer);

  //  Reset stopwatch variables
  elapsedMinutes = 0;
  elapsedSeconds = 0;
  elapsedMilliseconds = 0;

  $("#s_minutes").textContent = "00";
  $("#s_seconds").textContent = "00";
  $("#s_ms").textContent = "000";
};

document.addEventListener("DOMContentLoaded", () => {
  //  Set up the clock event handlers
  displayCurrentTime();
  setInterval(displayCurrentTime, 1000);

  //  Set up the stopwatch event handlers
  $("#start").addEventListener("click", startStopwatch);
  $("#stop").addEventListener("click", stopStopwatch);
  $("#reset").addEventListener("click", resetStopwatch);
});
