document.addEventListener("DOMContentLoaded", () => {
  const menuButton =
    document.querySelector(".menu-toggle") ||
    document.querySelector("#menu");

  const nav =
    document.querySelector(".nav-links") ||
    document.querySelector("#nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});
