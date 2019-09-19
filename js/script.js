
// ============================= Activate zoom-in effect on projects on hover =============================
const imageContainers = document.querySelectorAll('.image-container');
const thumbnails = document.querySelectorAll('.thumbnail');
const overlays = document.querySelectorAll('.overlay');
let button = document.createElement('div');
const projectName = document.querySelector('.card h5');



imageContainers.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    image.firstElementChild.style.transform = "scale(1.3)";
    image.lastElementChild.style.opacity = "1";
    image.firstElementChild.nextElementSibling.style.opacity = '0'; // targets h5 element
    if (image.parentNode.lastElementChild.lastElementChild.textContent === "Details") {
      image.parentNode.lastElementChild.lastElementChild.textContent = "Hide";      
    }
  });
  image.addEventListener('mouseleave', () => {
    image.firstElementChild.style.transform = "scale(1)";
    image.lastElementChild.style.opacity = "0"; 
    image.firstElementChild.nextElementSibling.style.opacity = '1'; // targets h5 element
    if (image.parentNode.lastElementChild.lastElementChild.textContent === "Hide") {
      image.parentNode.lastElementChild.lastElementChild.textContent = "Details";      
    }
  });
});


// ==================  "View More" Button on project cards ===========================
const views = document.querySelectorAll('.view-more');
const over = document.querySelector('.overlay')
const thumb = document.querySelector('.thumbnail')

views.forEach((view) => {
  view.addEventListener('click', () => {
    if (view.textContent === "Details") {
      view.parentNode.parentNode.firstElementChild.firstElementChild.style.transform = "scale(1.3)"; // targets image
      view.parentNode.parentNode.firstElementChild.lastElementChild.style.opacity = "1"; // targets overlay
      view.textContent = 'Hide'; // change text
      view.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.style.opacity = "0"; // targets h5 element

    } else {
      view.parentNode.parentNode.firstElementChild.firstElementChild.style.transform = "scale(1)"; // targets image
      view.parentNode.parentNode.firstElementChild.lastElementChild.style.opacity = "0"; // targets overlay
      view.textContent = "Details"; // change text
      view.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.style.opacity = "1"; // targets h5 element

    }
  });
})

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

//================= Type function =============== learned and modified from Traversy Media tutorial
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

//================================== Parallax Header - Name and TypeWriter ======================================
$(window).scroll(() => {
  let verticalScroll = $(this).scrollTop();
  
  $('.txt-type').css({
    'transform': 'translate(0px, ' + verticalScroll / .5 +'%)'
  });

});

$(window).scroll(() => {
  let verticalScroll = $(this).scrollTop();
  
  $('.name').css({
    'transform': 'translate(0px, ' + verticalScroll / 4.5 +'%)'
  });

});





