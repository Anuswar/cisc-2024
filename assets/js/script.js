/*=============== PRELOADER ===============*/
window.addEventListener("load", () => {
  // Hide the spinner after the page is fully loaded
  const spinner = document.querySelector("#spinner");
  spinner.classList.remove("show");

  spinner.addEventListener("transitionend", () => {
    spinner.style.display = "none";
  });

  // Scroll to the top when all external resources are loaded
  window.scrollTo(0, 0);
});

/*=============== SWIPER SLIDER ===============*/
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  lazy: true,
  centeredSlides: true,
  effect: "fade",
  slidesPerGroupSkip: 1,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  lazy: true,
  centeredSlides: true,
  effect: "fade",
  slidesPerGroupSkip: 1,
  grabCursor: true,
  mousewheel: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== HEADER ===============*/
document.addEventListener("DOMContentLoaded", function () {
  var toggler = document.querySelector(".navbar-toggler");
  var collapse = document.querySelector("#navbarCollapse");
  var navLinks = document.querySelectorAll(".nav-item.nav-link");
  var sections = document.querySelectorAll("section");

  toggler.addEventListener("click", function () {
    collapse.classList.toggle("show");
  });

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();
      if (window.innerWidth <= 991) {
        collapse.classList.remove("show");
      }
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      this.classList.add("active");
      var targetId = this.getAttribute("href").substr(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Close the menu when pressing the Escape key with smooth transition
  document.addEventListener("keyup", function (event) {
    if (event.key === "Escape" && window.innerWidth <= 991) {
      collapse.classList.remove("show");
    }
  });

  // Close the menu when scrolling on small screens with smooth transition
  window.addEventListener("scroll", function () {
    if (window.innerWidth <= 991) {
      collapse.classList.remove("show");
    }

    // Check which section is currently in the viewport and update the active link
    var scrollPosition = window.scrollY;
    sections.forEach(function (section) {
      var top = section.offsetTop - 50;
      var bottom = top + section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < bottom) {
        var id = section.getAttribute("id");
        navLinks.forEach(function (link) {
          link.classList.remove("active");
          if (link.getAttribute("href").substr(1) === id) {
            link.classList.add("active");
          }
        });
      }
    });
  });
});

/*=============== BACK TO TOP ===============*/
// Function to show or hide the scroll-up button based on scroll position
const scrollUp = () => {
  const scrollUpButton = document.getElementById("scroll-up");

  if (window.scrollY >= 350) {
    scrollUpButton.classList.add("show-scroll");
  } else {
    scrollUpButton.classList.remove("show-scroll");
  }
};

// Function to smoothly scroll to the top when the button is clicked
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Add event listener for scroll to show/hide the button
window.addEventListener("scroll", scrollUp);

// Add event listener for click on the scroll-up button to scroll to the top
document.getElementById("scroll-up").addEventListener("click", (event) => {
  event.preventDefault();
  scrollToTop();
});

// Disable scroll restoration
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

/*=============== POP UP ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const popupButtons = document.querySelectorAll(".popupButton");
  const popups = document.querySelectorAll(".popup");

  popupButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const popupId = button.getAttribute("data-popup");
      const popup = document.getElementById(popupId);
      popup.style.display = "block";
    });
  });

  popups.forEach((popup) => {
    const closeButton = popup.querySelector(".close");

    // Hide the popup when the close button is clicked
    closeButton.addEventListener("click", () => {
      popup.style.display = "none";
    });

    // Hide the popup when clicking outside of the popup content
    window.addEventListener("click", (event) => {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  });
});
