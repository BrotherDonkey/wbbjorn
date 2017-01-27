//font adjuster text
'use strict';

//declaring variables
const fontSmaller = document.getElementById('minusSign');
console.log(fontSmaller);
const fontLarger = document.getElementById('plusSign');
console.log(fontLarger);

// make font smaller function
const makeParaSmaller = function(e){
  const narTextCont = document.getElementById('narTextConts'); //select the narrative elements
  let rawFontSize = getComputedStyle(narTextCont).getPropertyValue('font-size'); //get the raw size
  var numFontSize = parseInt(rawFontSize.replace(/\D/g,''));
    if (numFontSize > 10) {
      let newFontSize = (numFontSize - 1);
      let concatFontSize = String(newFontSize) + "px";
      narTextCont.style.fontSize = concatFontSize;
    } else if (numFontSize <= 12) {
    }};

// make font bigger function
const makeParaLarger = function(e){
  const narTextCont = document.getElementById('narTextConts');
  let rawFontSize = getComputedStyle(narTextCont).getPropertyValue('font-size');
  var numFontSize = parseInt(rawFontSize.replace(/\D/g,''));
  if (numFontSize < 35) {
    let newFontSize = (numFontSize + 1);
    let concatFontSize = String(newFontSize) + "px";
    narTextCont.style.fontSize = concatFontSize;
  } else if (numFontSize >= 35) {
  };
};

//adding event listeners on two + - buttons
// fontSmaller.addEventListener('touchstart', makeParaSmaller);
// fontLarger.addEventListener('touchstart', makeParaLarger);
// fontLarger.addEventListener('touch', preventDefaultLar(evt));
//BUT DON'T DO IT WITHOUT PREVENT DEFAULT


fontSmaller.addEventListener('click', makeParaSmaller);
fontLarger.addEventListener('click', makeParaLarger);
