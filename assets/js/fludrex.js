var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
function changebox(type) {
  if (type == "disc") {
    document.getElementById("descr").style.display = "flex";
    document.getElementById("side").style.display = "none";
  } else if (type == "side") {
    document.getElementById("descr").style.display = "flex";
    document.getElementById("side").style.display = "none";
  }
}
