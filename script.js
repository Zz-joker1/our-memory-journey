document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const slides = Array.from(gallery.querySelectorAll("[data-gallery-slide]"));
  const dots = Array.from(gallery.querySelectorAll("[data-gallery-dot]"));
  const previousButton = gallery.querySelector("[data-gallery-prev]");
  const nextButton = gallery.querySelector("[data-gallery-next]");
  const counter = gallery.querySelector("[data-gallery-counter]");

  if (
    slides.length === 0 ||
    dots.length !== slides.length ||
    !previousButton ||
    !nextButton ||
    !counter
  ) {
    throw new Error("Photo gallery markup is incomplete.");
  }

  let activeIndex = Math.max(
    0,
    slides.findIndex((slide) => slide.classList.contains("is-active")),
  );

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.hidden = !isActive;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    dots.forEach((dot, dotIndex) => {
      dot.setAttribute("aria-current", String(dotIndex === activeIndex));
    });

    counter.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  };

  previousButton.addEventListener("click", () => showSlide(activeIndex - 1));
  nextButton.addEventListener("click", () => showSlide(activeIndex + 1));
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  showSlide(activeIndex);
});
