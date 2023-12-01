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

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeNavBarSticky() {
  // Get the navbar
  let navbar = document.getElementById("my__header__nav");
  // Get the offset position of the navbar
  let sticky = navbar.offsetTop;
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function listCSSClasses() {
  let classes = new Set()
  let elementsWithClasses = document.querySelectorAll('[class]')

  for (let element of elementsWithClasses) {
    for (let className of element.classList) {
      classes.add(className)
    }
  }
  console.log('The page has the following classes:\n  .' + listCSSClasses().join('\n  .'));
  return [...classes].sort()
}

export { makeMenuResponsive, makeNavBarSticky, listCSSClasses }