// ===================== Sticky top nav on scroll =============================
window.onscroll = function() {
    stickyNav()
  };
  
  var navbar = document.querySelector("nav");
  var sticky = navbar.offsetTop;
  
  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

// ============================= Menu toggle =============================
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  if (menu.classList[1] == "menu-show") {
    menu.classList.remove('menu-show');
    menu.classList.add('menu-hide');
  } else if (menu.classList[1] == "menu-hide") {
    menu.classList.remove('menu-hide');
    menu.classList.add('menu-show');
  }
})