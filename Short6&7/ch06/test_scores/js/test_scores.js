/*
		In this exercise, you'll start with the 
		declarations for two arrays, a names array 
		and a scores array. 
		
		Then, you'll add an event handler that 
		displays the names and scores in the text 
		area of the interface.
 */ 
 
"use strict";

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const $ = (selector) => document.querySelector(selector);

const createElementWithText = (tagName, text) => {
  const element = document.createElement(tagName);
  const textNode = document.createTextNode(text);
  element.appendChild(textNode);
  return element;
};

const addScore = () => {
  // get user entries
  const nameNode = $("#name");
  const scoreNode = $("#score");

  const name = nameNode.value;
  const score = parseInt(scoreNode.value);

  let isValid = true;

  // check entries for validity
  if (name == "") {
    $("#name").nextElementSibling.textContent = "Please Enter a Name.";
    isValid = false;
  } else {
    $("#name").nextElementSibling.textContent = "";
  }

  if (isNaN(score) || score < 0 || score > 100) {
    $("#score").nextElementSibling.textContent =
      "You must enter a valid score.";
    isValid = false;
  } else {
    $("#score").nextElementSibling.textContent = "";
  }

  if (isValid) {
    names[names.length] = name;
    scores[scores.length] = score;
    nameNode.value = "";
    scoreNode.value = "";
  }
  nameNode.focus();
};

const displayResults = () => {
  let scoreTotal = 0;
  let highScore = 0;
  let highScoreName = "";
  let averageScore = 0;

  for (let lcv in scores) {
    scoreTotal += scores[lcv];
    alert("Current score is: " + scores[lcv]);
    if (scores[lcv] > highScore) {
      highScore = scores[lcv];
      highScoreName = names[lcv];
    }
  }

  averageScore = scoreTotal / scores.length;

  const headerNode = createElementWithText("h2", "Results");
  const avgScoreNode = createElementWithText(
    "p",
    `High score = ${highScoreName} with a score of ${highScore}`
  );

  const div = $("#results");
  if (div.querySelector("h2") == undefined) {
    div.appendChild(headerNode);
    div.appendChild(avgScoreNode);
    div.appendChile(highScoreNode);
  } else {
    div.replaceChild(headerNode, div.firstChild);
    div.replaceChile(avgScoreNode, div.firstChild.nextElementSibling);
    div.replaceChile(highScoreNode, div.lastChild);
  }
};

const displayScores = () => {
  const div = $("#scores");
  div.textContent = "";
  div.appendChild(createElementWithText("h2", "Scores"));

  for (let lcv in scores) {
    div.appendChild(createElementWithText("label", names[lcv]));
    div.appendChild(createElementWithText("label", scores[lcv]));
    div.appendChild(document.createElement("br"));
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $("#add").addEventListener("click", addScore);
  $("#display_results").addEventListener("click", displayResults);
  $("#display_scores").addEventListener("click", displayScores);
});
