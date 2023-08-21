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

  const searchButton = document.querySelector(".search-input");
  const navTop = document.querySelector(".nav-top");
  const navTopItems = document.querySelectorAll(".nav-top-item");
  console.log(navTopItems);
  searchButton.addEventListener("focus", function () {
    setTimeout(() => {
      searchButton.style.width = navTop.offsetWidth + 24 + "px";
      searchButton.placeholder = "Search";
    }, 100);
    for (let index = 0; index < navTopItems.length - 1; index++) {
      const navTopItem = navTopItems[index];
      navTopItem.style.opacity = 0;
      setTimeout(() => {
        navTopItem.style.display = "none";
      }, 150);
    }
  });
  searchButton.addEventListener("blur", function () {
    searchButton.style.width = "24px";
    searchButton.placeholder = "";
    for (let index = 0; index < navTopItems.length - 1; index++) {
      const navTopItem = navTopItems[index];
      navTopItem.style.display = "flex";
      setTimeout(() => {
        navTopItem.style.opacity = 1;
      }, 150);
    }
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

// Resmi açma işlevi
function openModal(imageId) {
  var img = document.getElementById(imageId);
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.src = img.src;
}

// Modal'ı kapatma işlevi
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Modal dışına tıklamayı kapatma işlevi
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
