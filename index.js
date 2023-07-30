var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const image = document.getElementById("home-img");

function locateImg() {
  const img = image.getBoundingClientRect();
  console.log(img.x);
}

window.addEventListener("scroll", locateImg);

let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
let scrollingUp = false;

function handleScroll() {
  const currentScrollPos =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPos > prevScrollPos) {
    // Scrolling down
    scrollingUp = false;
  } else {
    // Scrolling up
    scrollingUp = true;
  }

  // Update the previous scroll position for the next scroll event
  prevScrollPos = currentScrollPos;
}

// Attach the handleScroll function to the scroll event
window.addEventListener("scroll", handleScroll);
