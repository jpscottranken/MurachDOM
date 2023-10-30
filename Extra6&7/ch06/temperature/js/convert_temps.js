/*
		In this exercise, you'll use radio buttons to 
		determine whether the conversion is from 
		Fahrenheit to Celsius or vice versa. 
		
		You'll also modify the DOM so the labels change 
		when a radio button is clicked, and the page 
		displays an error message when the user enters 
		invalid data.
 */

"use strict";

const MINTEMP = -100;
const MAXTEMP = 212;

const $ = (selector) => document.querySelector(selector);

const calculateCelsiusTemperature = (temp) => ((temp - 32) * 5) / 9;
const calculateFahrTemperature = (temp) => temp * (5 / 9) + 32;

const toggleDisplay = (label1Text, label2Text) => {
  //  Update the labels and clear the textboxes
  $("#degree_label_1").textContent = label1Text;
  $("#degree_label_2").textContent = label2Text;
  $("#degrees_computed").value = "";

  //  Select text in degrees textbox
  $("#degrees_entered").select();
};

const convertTemp = () => {
  const temp = parseFloat($("#degrees_entered").value);

  //  Validate the inputted temperature
  if (isNaN(temp) || temp < MINTEMP || temp > MAXTEMP) {
    //  Handle error condition
    $("#message").textContent =
      "You must enter a number between -100 and 212 for the temperature";
    $("degrees_computed").value = "";
    $("#degrees_entered").select();
  } else {
    $("#message").textContent = "";

    //  Computeand display the temperature
    //  based on the radio button that was clicked.
    if ($("#to_celsius").checked) {
      $("#degrees_computed").value = calculateCelsiusTemperature(temp);
    } else {
      $("#degrees_computed").value = calculateFahrTemperature(temp);
    }

    $("#degrees_entered").select();
  }
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius");
const toFahrenheit = () =>
  toggleDisplay("Enter C degrees:", "Degrees Fahrenheit");

document.addEventListener("DOMContentLoaded", () => {
  $("#convert").addEventListener("click", convertTemp);
  $("#to_celsius").addEventListener("click", toCelsius);
  $("#to_fahrenheit").addEventListener("click", toFahrenheit);

  //  Set focus
  $("#degrees_entered").focus();
});
