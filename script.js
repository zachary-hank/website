// Ensures animations only trigger once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    el.style.visibility = "visible";
  });
});
