/*
		In this exercise, you'll create an application 
		that displays the current time in hours, minutes, 
		and seconds. 
		
		The display should use a 12-hour clock and 
		indicate whether it's AM or PM.
		
		To convert the computer's time from a 24-hour 
		clock to a 12-hour clock, first check to see if 
		the hours value is greater than 12. If so, 
		subtract 12 from the hours value and set the AM/PM 
		value to “PM”. 
		
		Also, be aware the hours value for midnight is 0.
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
document.addEventListener("DOMContentLoaded", () => {
  displayCurrentTime();
  setInterval(displayCurrentTime, 1000);
});
