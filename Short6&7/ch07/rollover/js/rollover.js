/*
    In this exercise, you'll modify an Image Rollover 
    application so it preloads the images that are 
    displayed when the original images are rolled over. 
    
    In addition, you'll create timers that cause the 
    rollover images to be displayed when the page is 
    first loaded.
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("#image_rollovers img");

  //  Process each image tag
  for (let image of images) {
    const oldURL = image.src;
    const newURL = image.id;

    //  Preload the rollover image
    const rolloverImage = new Image();
    rolloverImage.src = newURL;

    //  Set up event handlers for
    //  hovering over an image.
    image.addEventListener("mouseover", () => {
      image.src = newURL;
    });
    image.addEventListener("mouseout", () => {
      image.src = oldURL;
    });

    //  Display new image after 1 second
    setTimeout(() => (image.src = newURL), 1000);

    //  Display old image after 2 second
    setTimeout(() => (image.src = oldURL), 2000);
  }
});
