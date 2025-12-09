/***********
* Nav Bar JS
***********/

const nav = document.getElementById("myTopNav");
const animation = nav.querySelector(".animation");
const links = nav.querySelectorAll("a.nav-link");
const activeLink = nav.querySelector("a.active");

function moveToLink(link) {
  const rect = link.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();
  animation.style.left = `${rect.left - navRect.left}px`;
  animation.style.width = `${rect.width}px`;
}

// hover behaviour
links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    moveToLink(link);
  });
});

// reset to active on mouse leave
nav.addEventListener("mouseleave", () => {
  if (activeLink) {
    moveToLink(activeLink);
  }
});

// ✅ set animation correctly on page load
if (activeLink) {
  window.addEventListener("load", () => {
    moveToLink(activeLink);
  });

  function myFunction() {
  nav.classList.toggle("responsive");
}
}