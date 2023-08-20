document.addEventListener("DOMContentLoaded", function () {
  var grid = document.querySelector(".grid");
  var masonry = new Masonry(".grid", {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
    gutter: ".gutter-sizer",
  });

  function addMoreGridItems() {
    var gridItems = grid.querySelectorAll(".grid-item");
    var linearGradient = document.querySelector(".linear-gradient");
    linearGradient.classList.add("opacity-0");
    var clonedItems = Array.from(gridItems).map(function (item) {
      return item.cloneNode(true);
    });

    clonedItems.forEach(function (clonedItem) {
      grid.appendChild(clonedItem);
    });
    masonry.reloadItems();
    masonry.layout();
    setTimeout(() => {
      grid.lastChild.scrollIntoViewIfNeeded();
    }, 300);
  }

  var expandButton = document.getElementById("expandButton");
  expandButton.addEventListener("click", function () {
    expandButton.classList.add("opacity-0");
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
