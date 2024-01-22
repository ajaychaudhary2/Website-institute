let heademenu = document.querySelector(".heademenu");
let FindQuery = document.querySelector(".custom-search .bx-search");
FindQuery.addEventListener("click", ()=>{
  heademenu.classList.toggle("showInput");
  if(heademenu.classList.contains("showInput")){
    FindQuery.classList.replace("bx-search" ,"bx-x");
  }else {
    FindQuery.classList.replace("bx-x" ,"bx-search");
  }
});
let navrelations = document.querySelector(".nav-relations");
let menuOpenBtn = document.querySelector(".heademenu .bx-menu");
let menuCloseBtn = document.querySelector(".nav-relations .bx-x");
menuOpenBtn.onclick = function() {
navrelations.style.left = "0";
}
menuCloseBtn.onclick = function() {
navrelations.style.left = "-100%";
}
let customWebArrow = document.querySelector(".customWeb-arrow");
customWebArrow.onclick = function() {
 navrelations.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navrelations.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navrelations.classList.toggle("show3");
}





