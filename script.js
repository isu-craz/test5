let lastScrollY = window.scrollY; // Store the last scroll position

window.addEventListener('scroll', () => {
  const header = document.getElementById('header'); // Get the header element

  if (window.scrollY > lastScrollY) {
    // Scrolling down
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'; // Set to default color
  } else {
    // Scrolling up
    header.style.backgroundColor = 'white'; // Change background to white
  }

  lastScrollY = window.scrollY; // Update the last scroll position
});



const sideNavbar = document.getElementById('side-nav-bar');
function showNavBar() {
  sideNavbar.style.left = '0';
  document.querySelector('.side-nav-bar-wrap').style.display = 'block';
  document.querySelector('body').style.overflow = 'hidden';

  //alert('Navigation bar is now visible');
}

/*  ===================  deleteee this okiiii  ===================    */
//deleteee this okiiii
//showNavBar();
/*  ===================  deleteee this okiiii  ===================    */


function hideNavBar() {
  sideNavbar.style.left = '-100%';
  document.querySelector('.side-nav-bar-wrap').style.display = 'none';
  document.querySelector('body').style.overflow = 'auto';
}


//  -----------------------------------------------------------------

const input = document.getElementById('search-input');
const clearBox = document.getElementById('clear-box');

function clearSearchInput() {
  input.value = ''; // Clear the input value
  input.focus(); // Set focus back to the input
  //clearBox.style.opacity = '0';
}



//  -----------------------------------------------------------------





//  --------------------- ESCAPE ----------------------------------

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { // Check if the Escape key was pressed
    if (sideNavbar) {
      hideNavBar();
    }
  }
}
)


//  ---------------------  ----------------------------------



//  --------------------- home catagories scrolling ----------------------------------

function scrollContent1(direction) {
  const content = document.querySelector('#content-pics1');
  const scrollAmount = 200; // Amount to scroll in pixels

  if (direction === 'left') {
    content.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
    content.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

function scrollContent2(direction) {
  const content = document.querySelector('#content-pics2');
  const scrollAmount = 200; // Amount to scroll in pixels

  if (direction === 'left') {
    content.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
    content.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

function scrollContent3(direction) {
  const content = document.querySelector('#content-pics3');
  const scrollAmount = 200; // Amount to scroll in pixels

  if (direction === 'left') {
    content.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
    content.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

//  --------------------- end ----------------------------------


//  --------------------- img gallery scrolling ----------------------------------


function scrollImgGallery(direction) {
  const content = document.querySelector('.gallery-container');
  const scrollAmount = 200; // Amount to scroll in pixels

  if (direction === 'up') {
    //alert('up');
    content.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'down') {
    //alert('down');
    content.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  }
}








//  ------------ auto  -------------

let autoScrollIntervalDown;
let autoScrollIntervalUp;

function autoScrollImgGallerybyInterval() {
  STOPautoScrollInterval(); // Clear any existing intervals before starting new ones

  autoScrollIntervalDown = setInterval(() => {
    autoScrollImgGallery();
  }, 250);

  autoScrollIntervalUp = setInterval(() => {
    clearInterval(autoScrollIntervalDown);
    RESETautoScrollImgGallery();

    setTimeout(() => {
      autoScrollIntervalDown = setInterval(() => {
        autoScrollImgGallery();
      }, 100);
    }, 2000); // 2 second wait

  }, 300000);
}

function autoScrollImgGallery() {
  const content = document.querySelector('.gallery-container');
  if (content) {
    const scrollAmount = 0.5; // Amount to scroll in pixels
    content.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  }
}

function STOPautoScrollInterval() {
  if (autoScrollIntervalDown) {
    clearInterval(autoScrollIntervalDown);
  }
  if (autoScrollIntervalUp) {
    clearInterval(autoScrollIntervalUp);
  }
}

function RESETautoScrollImgGallery() {    // Reset the scroll position  --- go to top
  const content = document.querySelector('.gallery-container');
  if (content) {
    content.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

autoScrollImgGallerybyInterval();

//  --------------------- end ----------------------------------

/*  my own one for auto acrolong





//  ------------ auto  -------------

let autoScrollIntervalDown;
let autoScrollIntervalUp;



function autoScrollImgGallerybyInterval() {
  autoScrollIntervalDown = setInterval(() => {
    autoScrollImgGallery();
  }, 100);

  autoScrollIntervalUp = setInterval(() => {
    clearInterval(autoScrollIntervalDown);
    RESETautoScrollImgGallery();

    setTimeout(() => {
      autoScrollIntervalDown = setInterval(() => {
        autoScrollImgGallery();
      }, 100);
    }, 2000); // 2 second wait

  }, 120000);
}

function autoScrollImgGallery() {
  const content = document.querySelector('.gallery-container');
  const scrollAmount = 0.5; // Amount to scroll in pixels
  content.scrollBy({ top: scrollAmount, behavior: 'smooth' });
}

function STOPautoScrollInterval() {
  clearInterval(autoScrollIntervalDown);
  clearInterval(autoScrollIntervalUp);
}

function RESETautoScrollImgGallery() {    // Reset the scroll position  --- go to top
  const content = document.querySelector('.gallery-container');
  content.scrollTo({ top: 0, behavior: 'smooth' });
}

autoScrollImgGallerybyInterval();


//  --------------------- end ----------------------------------



*/


document.querySelector('.toggle-submenu').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  const submenu = this.nextElementSibling; // Find the next sibling (the submenu)
  if (submenu.style.display === "none" || submenu.style.display === "") {
    submenu.style.display = "block"; // Show submenu
  } else {
    submenu.style.display = "none"; // Hide submenu
  }
});




function toggleDropDown(element) {
  const catTag = element.closest('.cat-tag'); // Get the closest cat-tag container
  const isActive = catTag.classList.contains('active');

  // Close all open dropdowns
  document.querySelectorAll('.cat-tag').forEach(tag => {
    tag.classList.remove('active');
  });

  // Toggle only the clicked dropdown
  if (!isActive) {
    catTag.classList.add('active');
  }
}




/*
Case 1: Navigating to another page and a specific section

--- code --->>> goToLocation("https://example.com/page", "section2");

This will redirect the user to https://example.com/page#section2, and if an element with id="section2" exists, it will scroll there.



if you meant to navigate to another page or section, use:

--- code --->>> function goToLocation(location, hash) {
                  window.location.href = `${location}#${hash}`;
                }


*/


function runToLocation(location, hash) {
  
  hideNavBar();
  //close all dropdowns
  document.querySelectorAll('.cat-tag').forEach(tag => {
    tag.classList.remove('active');
  });

  window.location.href = `${location}#${hash}`;
}

function goToLocation(hash) {
  hideNavBar();
  //close all dropdowns
  document.querySelectorAll('.cat-tag').forEach(tag => {
    tag.classList.remove('active');
  });
  
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

}



 
 
 
 