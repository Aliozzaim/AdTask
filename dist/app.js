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
