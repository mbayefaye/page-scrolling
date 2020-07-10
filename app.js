///get elemenst
var listItems = document.querySelectorAll('#mainContent ol li');
var firstBox = document.querySelector('#firstBox');
var secondBox = document.querySelector('#secondBox');
let isScrolling = false;

//fire the function when the content is loaded
document.addEventListener('DOMContentLoaded', scrolling, false);

//scroll on window
window.addEventListener('scroll', throttleScroll, false);

///request animation fram
function throttleScroll(e) {
  if (isScrolling === false) {
    requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

//scrolling effects
function scrolling(e) {
  if (partiallyVisible(firstBox)) {
    firstBox.classList.add('active');
    document.body.classList.add('colorOne');
    document.body.classList.remove('colorTwo');
  } else {
    document.body.classList.remove('colorOne');
    document.body.classList.remove('colorTwo');
  }
  if (fullyVisible(secondBox)) {
    secondBox.classList.add('active');
    document.body.classList.add('colorTwo');
    document.body.classList.remove('colorOne');
  }
  //loop li and add or remove active class
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    if (partiallyVisible(listItem)) {
      listItem.classList.add('active');
    } else {
      listItem.classList.remove('active');
    }
  }
}

///helpers functions
function partiallyVisible(el) {
  let elementboundary = el.getBoundingClientRect();
  let top = elementboundary.top;
  let bottom = elementboundary.bottom;
  let height = elementboundary.height;
  return top + bottom >= 0 && height + window.innerHeight >= bottom;
}

function fullyVisible(el) {
  let elementboundary = el.getBoundingClientRect();
  let top = elementboundary.top;
  let bottom = elementboundary.bottom;
  return top >= 0 && bottom <= window.innerHeight;
}
