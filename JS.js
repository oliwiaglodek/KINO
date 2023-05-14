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
