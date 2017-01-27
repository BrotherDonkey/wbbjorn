'use strict';

var navIcon = document.getElementById('navIcon');
var exitNav = document.getElementById('exitNav');
var overLayMenu = document.getElementById('overlayMenu');
var bodyEl = document.querySelector('body');



var showNav = function() {
  console.log('click event engaged');
  overlayMenu.classList.remove('hide');
  overlayMenu.classList.add('stop-scrolling');
};

var removeNav = function() {
  console.log('remove nav engaged');
  overlayMenu.classList.add('hide');
  overlayMenu.classList.add('stop-scrolling');

};


const preventDef = function(e) {
  // console.log(e);
  var shown = overlayMenu.classList.contains("hide");
  // console.log(shown);
  if (!shown) {
    e.preventDefault();
  }
  // else {
  //   // console.log('not prevented');
  // }
};


navIcon.addEventListener("click", showNav);
exitNav.addEventListener("click", removeNav);
// bodyEl.addEventListener('touchmove', preventDef);

// overlayMenu.addEventListener("click", checkMenu());
