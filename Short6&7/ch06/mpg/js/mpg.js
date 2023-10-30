/*
    In this exercise, you'll upgrade a version of 
    the MPG application so the error messages are 
    displayed in span elements to the right of 
    the text boxes.
 */
"use strict";

const $ = (selector) => document.querySelector(selector);

const calculateMPG = (miles, gallons) => (miles / gallons).toFixed(1);

const processEntries = () => {
  const miles = parseFloat($("#miles").value);
  const gallons = parseFloat($("#gallons").value);
  let isValid = true;

  //  Validate miles driven
  if (isNaN(miles) || miles <= 0) {
    $("#miles").nextElementSibling.firstChild.nodeValue =
      "Miles Driven Must > 0.";
    isValid = false;
  } else {
    $("#miles").nextElementSibling.firstChild.nodeValue = "";
  }
  //  Validate gallons used
  if (isNaN(gallons) || gallons <= 0) {
    $("#gallons").nextElementSibling.firstChild.nodeValue =
      "Gallons Used Must Be > 0.";
    isValid = false;
  } else {
    $("#gallons").nextElementSibling.firstChild.nodeValue = "";
  }
  //  If we have valid values for both miles driven and
  //  gallons used, we can calulate the miles per gallon (MPG).
  if (isValid) {
    $("#miles").nextElementSibling.firstChild.nodeValue = "";
    $("#gallons").nextElementSibling.firstChild.nodeValue = "";
    $("#mpg").value = calculateMPG(miles, gallons);
  }
};

//  Clear all textboxes and set <span>
//  text back to "*".
const clearEntries = () => {
  $("#miles").value = "";
  $("#gallons").value = "";
  $("#mpg").value = "";
  $("#miles").nextElementSibling.firstChild.nodeValue = "*";
  $("#gallons").nextElementSibling.firstChild.nodeValue = "*";
  $("#miles").focus();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntries);
  $("#clear").addEventListener("click", clearEntries);
  $("#miles").focus();
});
