document.addEventListener("DOMContentLoaded", function () {
  var grid = document.querySelector(".grid");
  var masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: 160,
  });

  function addMoreGridItems() {
    var gridItems = grid.querySelectorAll(".grid-item");
    var clonedItems = Array.from(gridItems).map(function (item) {
      return item.cloneNode(true);
    });

    clonedItems.forEach(function (clonedItem) {
      grid.appendChild(clonedItem);
    });

    masonry.reloadItems();
    masonry.layout();
  }

  var expandButton = document.getElementById("expandButton");
  expandButton.addEventListener("click", function () {
    addMoreGridItems();
  });
});
//slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// document.addEventListener("DOMContentLoaded", function () {
//   var grid = document.querySelector(".grid");
//   var masonry = new Masonry(grid, {
//     itemSelector: ".grid-item",
//     columnWidth: 160,
//   });

//   var imageUrls = [
//     "/images/Photo10.png",
//     "/images/Photo11.png",
//     "/images/Photo12.png",
//   ];

//   function addMoreGridItems() {
//     var randomImageUrls = getRandomImageUrls(imageUrls, 3);

//     randomImageUrls.forEach(function (imageUrl) {
//       var gridItem = document.createElement("div");
//       gridItem.className = "grid-item";
//       var img = document.createElement("img");
//       img.src = imageUrl;
//       gridItem.appendChild(img);
//       grid.appendChild(gridItem);
//     });

//     masonry.reloadItems();
//     masonry.layout();
//   }

//   function getRandomImageUrls(array, count) {
//     var shuffled = array.slice();
//     for (var i = shuffled.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//     }
//     return shuffled.slice(0, count);
//   }

//   var expandButton = document.getElementById("expandButton");
//   expandButton.addEventListener("click", function () {
//     addMoreGridItems();
//   });
// });
