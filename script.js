import OverlayScrollbars from 'OverlayScrollbars';
import './css/OverlayScrollbars.css';



// Custom scrollbar
const scrollbar = OverlayScrollbars(document.querySelector("body"), {
      scrollbars: {
        autoHide: "scroll",
      },}); 

const scrollToTopBtn = document.querySelector(".scrollToTopButton");
const target = document.querySelector("footer");
// Scroll to top
(() => {
  const callback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) scrollToTopBtn.classList.add("showed");
      else scrollToTopBtn.classList.remove("showed");
    });
  };

  const observer = new IntersectionObserver(callback);

  observer.observe(target);

  const scrollToTop = function () {
       scrollbar.scroll({ y: "0" });
    };
  scrollToTopBtn.addEventListener("click", scrollToTop);
})();
