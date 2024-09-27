const playButtons = document.querySelectorAll(".play-btn");
playButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "none" ? "block" : "none";
  });
});

// Toggle the active class for the nav-menu when the hamburger menu is clicked
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
