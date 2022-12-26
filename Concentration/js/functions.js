"use strict";

// Insert a random image from the images folder into each table item with the class of "block" so that there are two images of each image except for the image named "Charlie". The images should be inserted in a random order.
// Once complete there should be 1 image of "Charlie" and 2 images of each of the other images.


// Create a function that will be called when the user clicks on a table item with the class of "block". The images should be hidden at this time.  The function should check to see if the user has clicked on the same table item twice. If they have, then the function should do nothing. If they have not, then the function should check to see if the user has clicked on two different table items. If they have, then the function should check to see if the two table items have the same image. If they do, then the function should leave the table items showing the image and add 1 to the score. If they do not, then the function should hide the images in the table items.

// Once complete, the user should be able to click on two table items and if they have the same image, then the images should remain showing. If they do not have the same image, then the images should be hidden again. The user should be able to continue to click on table items until all the images are showing.

// function insertImages() {
//     var a = Math.floor(Math.random() * images.length);
//     var img = pics[a];
//     pic.style.backgroundImage = img;
// }

const card = document.querySelector('.card__inner');

card.addEventListener('click', function() {
  card.classList.toggle('is-flipped');
});