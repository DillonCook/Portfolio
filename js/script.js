// Sticky top nav on scroll
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

// Activate zoom-in effect on hover
const imageContainers = document.querySelectorAll('.image-container');
const thumbnails = document.querySelectorAll('.thumbnail');
const overlays = document.querySelectorAll('.overlay');

imageContainers.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    image.firstElementChild.style.transform = "scale(1.3)";
  });
  image.addEventListener('mouseleave', () => {
    image.firstElementChild.style.transform = "scale(1)";
  });
});

// Icons
const icons = document.querySelectorAll('.icon');
let modal = document.createElement('div');
let modalText = document.createElement('p');

icons.forEach((icon) => {
  // hover over icons - displays info
  icon.addEventListener('mouseenter', () => {

      modal.classList.add('icon-modal');      
      modal.appendChild(modalText);      
      icon.parentNode.append(modal);

    if (icon.classList[0] == "devicon-html5-plain") {
      modalText.textContent = "HTML5";
    } else if (icon.classList[0] == "devicon-css3-plain") {
      modalText.textContent = "CSS3";
    } else if (icon.classList[0] == "devicon-javascript-plain") {
      modalText.textContent = "Pure JavaScript";
    } else if (icon.classList[0] == "devicon-jquery-plain") {
      modalText.textContent = "jQuery & plugins";
    } else if (icon.classList[0] == "devicon-sass-original") {
      modalText.textContent = "Sass";
    } else if (icon.classList[0] == "devicon-git-plain") {
      modalText.textContent = "Git";
    }
  });
  // mouse leaves - info dies
  icon.addEventListener('mouseleave', () => {
      icon.parentNode.removeChild(modal);
  });
});