const menu = document.querySelector("#menu");
const btn = document.querySelector("#toggle-btn");

function toggle() {
  if (menu.style.display === "none") {
    menu.style.display = "block"
  } else {
    menu.style.display = "none"
  }
};



function myFunction_2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};