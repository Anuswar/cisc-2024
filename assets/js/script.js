/*=============== PRELOADER ===============*/
window.addEventListener("load", () => {
  const spinner = document.querySelector("#spinner");
  if (spinner) {
    spinner.classList.remove("show");
    spinner.addEventListener("transitionend", () => {
      spinner.style.display = "none";
    });
  }

  window.scrollTo(0, 0);

  if (window.ScrollReveal) {
    ScrollReveal().reveal(".left_anim", {
      origin: "left",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".top_bar .col-lg-4", {
      origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".header .logo, .header .menuBtn, .header .non", {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".p-3", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".section-title", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".about-text", {
      origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".about-image", {
      origin: "left",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".top-anim", {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });
  }
});

/*=============== SWIPER SLIDER ===============*/
if (window.Swiper) {
  new Swiper(".mySwiper", {
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

  new Swiper(".custom-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    mousewheel: true,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}

/*=============== HEADER ===============*/
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  let lastScrollY = window.scrollY;

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY) {
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
      }
      lastScrollY = window.scrollY;

      if (window.pageYOffset > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    const menuBtn = document.querySelector(".menuBtn");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const navLinks = document.querySelectorAll(
      ".non .nav-link, .menu .nav-link"
    );
    const sections = document.querySelectorAll("section");

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

    function setActiveLink() {
      let currentSection = sections[0];

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section;
        }
      });

      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
        if (navLink.getAttribute("href") === `#${currentSection.id}`) {
          navLink.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", setActiveLink);

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
          event.preventDefault();
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

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    const callForPapersLink = document.getElementById("callForPapersLink");
    if (callForPapersLink) {
      callForPapersLink.addEventListener("click", function (event) {
        event.preventDefault();
        const href = callForPapersLink.getAttribute("href");
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth",
          });
          setTimeout(() => {
            callForPapersLink.removeAttribute("href");
          }, 1000);
        }
      });
    }

    setActiveLink();
  }
});

/*=============== FOOTER ===============*/
document.addEventListener("DOMContentLoaded", function () {
  const quickLinks = document.getElementById("quick-links");
  if (quickLinks) {
    const links = quickLinks.getElementsByTagName("a");
    for (let link of links) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const href = this.getAttribute("href");
        if (href.startsWith("#")) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth",
            });
          }
          if (history.pushState) {
            history.pushState(
              null,
              null,
              window.location.pathname + window.location.search
            );
          } else {
            window.location.hash = "";
          }
        }
      });
    }
  }
});

/*=============== BACK TO TOP ===============*/
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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", scrollUp);

const scrollUpButton = document.getElementById("scroll-up");
if (scrollUpButton) {
  scrollUpButton.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToTop();
  });
}

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
          popup.classList.add("open");
        }
      });
    });
  }

  if (popups) {
    popups.forEach((popup) => {
      const closeButton = popup.querySelector(".closePopup");
      if (closeButton) {
        closeButton.addEventListener("click", () => {
          popup.classList.remove("open");
        });
      }

      popup.addEventListener("click", (event) => {
        if (event.target === popup) {
          popup.classList.remove("open");
        }
      });
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      popups.forEach((popup) => {
        popup.classList.remove("open");
      });
    }
  });
});
