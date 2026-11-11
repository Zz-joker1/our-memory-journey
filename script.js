const memoryLink = document.querySelector('.button-link[href="#memories"]');
const memoriesSection = document.querySelector("#memories");

if (memoryLink && memoriesSection) {
  memoryLink.addEventListener("click", (event) => {
    event.preventDefault();
    memoriesSection.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", "#memories");
  });
}
