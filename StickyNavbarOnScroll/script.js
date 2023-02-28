window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// active

const navbarNav = document.querySelector(".navbar-nav");
navbarNav.addEventListener("click", (e) => {
  const navLink = e.target.parentElement;
  if (navLink.classList.contains("nav-item")) {
    // alert("hello");
    navbarNav.querySelector(".active").classList.remove("active");
    e.target.parentElement.classList.add("active");
  }
});
