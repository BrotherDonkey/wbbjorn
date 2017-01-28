//font adjuster text
'use strict';

//declaring variables
const fontSmaller = document.getElementById('minusSign');
console.log(fontSmaller);
const fontLarger = document.getElementById('plusSign');
console.log(fontLarger);
const bodyDiv = document.querySelector('body');

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

const prevDoub = function(e) {
  e.preventDefault();
}

fontSmaller.addEventListener('click', makeParaSmaller);
fontLarger.addEventListener('click', makeParaLarger);
fontSmaller.addEventListener('dblclick', prevDoub);
bodyDiv.addEventListener('dblclick', prevDoub);
