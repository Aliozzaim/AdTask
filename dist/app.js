// document.addEventListener("DOMContentLoaded", function () {
//   var grid = document.querySelector(".grid");
//   var masonry = new Masonry(grid, {
//     itemSelector: ".grid-item",
//     columnWidth: 160,
//   });

//   function addMoreGridItems() {
//     var gridItems = grid.querySelectorAll(".grid-item");
//     var clonedItems = Array.from(gridItems).map(function (item) {
//       return item.cloneNode(true);
//     });

//     clonedItems.forEach(function (clonedItem) {
//       grid.appendChild(clonedItem);
//     });

//     masonry.reloadItems();
//     masonry.layout();
//   }

//   var expandButton = document.getElementById("expandButton");
//   expandButton.addEventListener("click", function () {
//     addMoreGridItems();
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var grid = document.querySelector(".grid");
  var masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: 160,
  });

  var imageUrls = [
    "/images/Photo10.png",
    "/images/Photo11.png",
    "/images/Photo12.png",
  ];

  function addMoreGridItems() {
    var randomImageUrls = getRandomImageUrls(imageUrls, 3);

    randomImageUrls.forEach(function (imageUrl) {
      var gridItem = document.createElement("div");
      gridItem.className = "grid-item";
      var img = document.createElement("img");
      img.src = imageUrl;
      gridItem.appendChild(img);
      grid.appendChild(gridItem);
    });

    masonry.reloadItems();
    masonry.layout();
  }

  function getRandomImageUrls(array, count) {
    var shuffled = array.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }

  var expandButton = document.getElementById("expandButton");
  expandButton.addEventListener("click", function () {
    addMoreGridItems();
  });
});
