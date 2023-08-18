window.addEventListener('load', function() {
  window.onscroll = function() {stickyNavbar()};
  
var navbar = document.getElementById("sticky-navbar-tb");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-navbar")
  } else {
    navbar.classList.remove("sticky-navbar");
  }
}
});