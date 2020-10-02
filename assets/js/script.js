let navBtn = document.querySelector("#navBtn");
let navModal = document.querySelector("#navModal");
let toggleMenu = () => {
    if(navModal.style.display == "none"){
        navModal.style.display = "block";
    }else{
        navModal.style.display = "none";
    }
}
navBtn.addEventListener("click", toggleMenu);


var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBar").style.top = "0";
  } else {
    document.getElementById("navBar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}