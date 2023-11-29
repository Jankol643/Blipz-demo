document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");
  makeMenuResponsive();
});

function makeMenuResponsive() {
  /* Toggle between adding and removing the "responsive" class to header__nav when the user clicks on the icon */
  let x = document.getElementById("my__header__nav");
  if (x.className === "header__nav") {
    x.className += " responsive";
  } else {
    x.className = "header__nav";
  }
  console.log("Menu is responsive");
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  makeNavBarSticky();
};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeNavBarSticky() {
  // Get the navbar
  var navbar = document.getElementById("my__header__nav");
  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
