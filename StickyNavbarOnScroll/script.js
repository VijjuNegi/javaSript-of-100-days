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

/* scroll Top Button */
const scrollBtn = document.querySelector(".scrollTop ");

const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", () => {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function showBtn() {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if (rootEl.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.add("show-btn");
  } else {
    scrollBtn.classList.remove("show-btn");
  }
}
