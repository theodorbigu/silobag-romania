const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbar = document.getElementsByClassName("navbar")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");

  toggleButton.classList.toggle("toggle");
  navbar.classList.toggle("navbar-bg");
});


// lottie-hero:

const svgContainerHero = document.getElementById("hero-lottie");
const animItemHero = bodymovin.loadAnimation({
  wrapper: svgContainerHero,
  animType: "svg",
  loop: true,
  autoplay: true,
  path: "./lotties/hero-arrow.json",
});



// lottie-galerie:

const svgContainerLeft = document.getElementById("galerie-lottie-left");
const animItemLeft = bodymovin.loadAnimation({
  wrapper: svgContainerLeft,
  animType: "svg",
  loop: true,
  autoplay: true,
  path: "./lotties/galerie.json",
});

const svgContainerRight = document.getElementById("galerie-lottie-right");
const animItemRight = bodymovin.loadAnimation({
  wrapper: svgContainerRight,
  animType: "svg",
  loop: true,
  autoplay: true,
  path: "./lotties/lf30_editor_sihjzzzx.json",
});



