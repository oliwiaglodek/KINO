"use strict";
// Kod do obsługi accordion
const accordionTitles = document.querySelectorAll(".item");

accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    if (accordionTitle.classList.contains("open")) {
      accordionTitle.classList.remove("open");
    } else {
      const accordionTitlesWithIsOpen = document.querySelectorAll(".open");
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove("open");
      });
      accordionTitle.classList.add("open");
    }
  });
});

// //! https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/

const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".right");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;
if (nextSlide) {
  // add event listener and navigation functionality
  nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });
}
// select next slide button
const prevSlide = document.querySelector(".left");
if (prevSlide) {
  // add event listener and navigation functionality
  prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });
}

// Smooth srcolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    if (href !== "#" && !href.startsWith("#")) {
      return; // Nie wywołuj preventDefault dla linków z innym adresem URL, bez #
    }
    e.preventDefault();

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Kod od strony cennik
const Price = document.querySelector(".ceny-bilet-link");
const PriceGrupowe = document.querySelector(".ceny-grupowe-link");

const cennik1 = document.querySelector(".cennik1");
const cennik2 = document.querySelector(".cennik2");

PriceGrupowe.addEventListener("click", function () {
  if (cennik2.classList.contains("hidden-cennik")) {
    cennik2.classList.remove("hidden-cennik");
    cennik1.classList.add("hidden-cennik");
  }
});

Price.addEventListener("click", function () {
  if (cennik1.classList.contains("hidden-cennik")) {
    cennik1.classList.remove("hidden-cennik");
    cennik2.classList.add("hidden-cennik");
  }
});
