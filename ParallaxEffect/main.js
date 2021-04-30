let img01 = document.getElementById("img01");
let img02 = document.getElementById("img02");
let txt01 = document.getElementById("txt01");
let img03 = document.getElementById("img03");
let img04 = document.getElementById("img04");
let txt02 = document.getElementById("txt02");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  img01.style.bottom = value * 0.2 + "px";
  img02.style.right = value * 0.1 + "px";
  txt01.style.left = value * 0.1 + "px";
  img03.style.bottom = -230 + value * 0.2 + "px";
  img04.style.right = -100 + value * 0.1 + "px";
  txt02.style.right = value * 0.2 + "px";
});
