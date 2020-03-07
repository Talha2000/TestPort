//const scroll = new SmoothScroll('.navbar a[href*="#"]', {
// speed: 500
//}); 
/* Set the width of the side navigation to 0 */


/* This is for the Python side bar */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  /* This is for the Bash side bar */
  function openNav2() {
    document.getElementById("mySidenav2").style.width = "100%";
  }
  
  function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
  }
  
  /* This is for the Haskell side bar */
  function openNav3() {
    document.getElementById("mySidenav3").style.width = "100%";
  }
  function closeNav3() {
    document.getElementById("mySidenav3").style.width = "0";
  }
  
  /* This is for the Java side bar */
  function openNav4() {
    document.getElementById("mySidenav4").style.width = "100%";
  }
  function closeNav4() {
    document.getElementById("mySidenav4").style.width = "0";
  }

  function openNav5() {
    document.getElementById("mySidenav5").style.width = "100%";
  }
  function closeNav5() {
    document.getElementById("mySidenav5").style.width = "0";
  }

  function openNav6() {
    document.getElementById("mySidenav6").style.width = "100%";
  }
  function closeNav6() {
    document.getElementById("mySidenav6").style.width = "0";
  }


// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 4);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init2);


// Init App

function init2() {
  const txtElement = document.querySelector('.txt-type2');

  const words = JSON.parse(txtElement.getAttribute('data-words2'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// Dark, light mode changes

function myFunction()  {
  var element = document.body;
  element.classList.toggle("dark-mode");
}