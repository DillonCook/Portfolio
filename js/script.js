
// ============================= Activate zoom-in effect on projects on hover =============================
const imageContainers = document.querySelectorAll('.image-container');
const thumbnails = document.querySelectorAll('.thumbnail');
const overlays = document.querySelectorAll('.overlay');
let button = document.createElement('div');

imageContainers.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    image.firstElementChild.style.transform = "scale(1.3)";
    image.lastElementChild.style.opacity = "1";
  });
  image.addEventListener('mouseleave', () => {
    image.firstElementChild.style.transform = "scale(1)";
    image.lastElementChild.style.opacity = "0";
    if (image.parentNode.lastElementChild.lastElementChild.textContent == "Hide") {
      image.parentNode.lastElementChild.lastElementChild.textContent = "View More";      
    }
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
      // Time out allows fade in of modals
      setTimeout(() => {
        modal.style.opacity = "1";
        // set to 0 so opacity instantly triggers upon creaton of modal
      }, 0);
      
    if (icon.classList[0] == "devicon-html5-plain") {
      modalText.textContent = "HTML5";
      // modal.style.backgroundColor = "rgba(240, 100, 20, .8)";
    } else if (icon.classList[0] == "devicon-css3-plain") {
      modalText.textContent = "CSS3";
      // modal.style.backgroundColor = "rgba(0, 82, 206, .8)";
    } else if (icon.classList[0] == "devicon-javascript-plain") {
      modalText.textContent = "Pure JavaScript";
      // modal.style.backgroundColor = "rgba(214, 195, 19, .8)";
    } else if (icon.classList[0] == "devicon-jquery-plain") {
      modalText.textContent = "jQuery & plugins";
      // modal.style.backgroundColor = "rgba(138, 225, 252, .8)";
    } else if (icon.classList[0] == "devicon-sass-original") {
      modalText.textContent = "Sass";
      // modal.style.backgroundColor = "rgba(253, 101, 164, .8)";
    } else if (icon.classList[0] == "devicon-git-plain") {
      modalText.textContent = "Git";
    }
  });
  // mouse leaves - info dies
  icon.addEventListener('mouseleave', () => {
    modal.style.opacity = "0";
      // setTimeout(() => icon.parentNode.removeChild(modal), 5000); 
  });
});

// jQuery smooth scroll down on click
$('#nav-projects').click(() => {
  $('html, body').animate({
      scrollTop: $('#projects').offset().top
  }, 500);
});

$('#nav-contact').click(() => {
  $('html, body').animate({
      scrollTop: $('#contact').offset().top
  }, 500);
});

$('#nav-home').click(() => {
  $('html, body').animate({
      scrollTop: $('#home').offset().top
  }, 400);
});

$('#about-me').click(() => {
  $('html, body').animate({
      scrollTop: $('#about-me').offset().top
  }, 500);
});

$('#projects').click(() => {
  $('html, body').animate({
      scrollTop: $('#projects').offset().top
  }, 500);
});


// ================ Typewriter Effect ============================================================================

const typeWriter = function (txtElement, words, wait = 2500) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

//================= Type function =============== learned and modified from Traversy Media
  typeWriter.prototype.type = function() {
    // Create index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of word
    const fullTxt = this.words[current];
    // check if deleting
    if (this.isDeleting) {
      // Remove characters
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    // Variable type speed
    let typeSpeed = 200;
    if (this.isDeleting) {
      typeSpeed /= 3;
    }
    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // move to next word
      this.wordIndex ++;
      // pause type speed
      typeSpeed = 300;
    }
    setTimeout(() =>  this.type(), typeSpeed)
  }

// Dom Load Init
document.addEventListener('DOMContentLoaded', init);

// init
function init(){
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  new typeWriter(txtElement, words, wait);
}
//================================== TypeWriter Finish ======================================



// ==================  "View More" Button on project cards ===========================
const views = document.querySelectorAll('.view-more');
const over = document.querySelector('.overlay')
const thumb = document.querySelector('.thumbnail')

views.forEach((view) => {
  view.addEventListener('click', () => {
    if (view.textContent == "View More") {
      view.parentNode.parentNode.firstElementChild.firstElementChild.style.transform = "scale(1.3)";
      view.parentNode.parentNode.firstElementChild.lastElementChild.style.opacity = "1";
      view.textContent = 'Hide';
  
    } else {
      view.parentNode.parentNode.firstElementChild.firstElementChild.style.transform = "scale(1)";
      view.parentNode.parentNode.firstElementChild.lastElementChild.style.opacity = "0";
      view.textContent = "View More";
    }
  });
})



