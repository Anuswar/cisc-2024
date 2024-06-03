/*=============== PRELOADER ===============*/
window.addEventListener("load", () => {
  // Hide the spinner after the page is fully loaded
  const spinner = document.querySelector("#spinner");
  if (spinner) {
    spinner.classList.remove("show");

    spinner.addEventListener("transitionend", () => {
      spinner.style.display = "none";
    });
  }

  // Scroll to the top when all external resources are loaded
  window.scrollTo(0, 0);
});

/*=============== SWIPER SLIDER ===============*/
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  lazy: true,
  centeredSlides: true,
  effect: "fade",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

/*=============== HEADER ===============*/
const header = document.querySelector(".header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (header) {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      header.classList.add("hide");
    } else {
      // Scrolling up
      header.classList.remove("hide");
    }
    lastScrollY = window.scrollY;

    if (window.pageYOffset > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

/*=============== MENU ===============*/
(function () {
  const menuBtn = document.querySelector(".menuBtn");
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");

  const searchBtn = document.getElementById("searchBtn");
  const navLinks = document.querySelectorAll(".navlink");

  function openMenu() {
    if (menu) menu.classList.add("open");
    if (overlay) overlay.classList.add("open");
  }

  function closeMenu() {
    if (menu) menu.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
    removeHashFromUrl();
  }

  function removeHashFromUrl() {
    if (window.location.hash) {
      window.history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      if (menu && menu.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (navLinks) {
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", function (event) {
        closeMenu();
        event.preventDefault(); // Prevent default navigation to handle it manually
        const href = navLink.getAttribute("href");
        if (href.startsWith("#")) {
          const target = document.querySelector(href);
          if (target) {
            window.scrollTo({
              top: target.offsetTop,
              behavior: "smooth",
            });
          }
        } else {
          window.location.href = href;
        }
      });
    });
  }

  if (overlay) {
    overlay.addEventListener("click", function () {
      closeMenu();
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      closeMenu();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
})();

/*=============== BACK TO TOP ===============*/
// Function to show or hide the scroll-up button based on scroll position
const scrollUp = () => {
  const scrollUpButton = document.getElementById("scroll-up");
  if (scrollUpButton) {
    if (window.scrollY >= 350) {
      scrollUpButton.classList.add("show-scroll");
    } else {
      scrollUpButton.classList.remove("show-scroll");
    }
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
const scrollUpButton = document.getElementById("scroll-up");
if (scrollUpButton) {
  scrollUpButton.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToTop();
  });
}

// Disable scroll restoration
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

/*=============== POP UP ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const popupButtons = document.querySelectorAll(".popupButton");
  const popups = document.querySelectorAll(".popup");

  if (popupButtons) {
    popupButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const popupId = button.getAttribute("data-popup");
        const popup = document.getElementById(popupId);
        if (popup) {
          popup.style.display = "block";
        }
      });
    });
  }

  if (popups) {
    popups.forEach((popup) => {
      const closeButton = popup.querySelector(".close");

      if (closeButton) {
        // Hide the popup when the close button is clicked
        closeButton.addEventListener("click", () => {
          popup.style.display = "none";
        });
      }

      // Hide the popup when clicking outside of the popup content
      window.addEventListener("click", (event) => {
        if (event.target === popup) {
          popup.style.display = "none";
        }
      });
    });
  }
});
