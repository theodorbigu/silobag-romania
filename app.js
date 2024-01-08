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
  path: "../lotties/galerie.json",
});

const svgContainerRight = document.getElementById("galerie-lottie-right");
const animItemRight = bodymovin.loadAnimation({
  wrapper: svgContainerRight,
  animType: "svg",
  loop: true,
  autoplay: true,
  path: "../lotties/galerie.json",
});

//AOS:

AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: "ease-out", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

AOS.disableALL();


