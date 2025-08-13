let items = document.querySelectorAll(".list-brand__item");
let showMore = document.querySelector(".more__text");
let list = document.querySelector(".list-brand");
let div = document.querySelector(".repair__brand");

showMore.addEventListener("click", function (evt) {
  evt.preventDefault();

  showMore.classList.toggle("rotate");
  if (showMore.classList.contains("rotate")) {
    showMore.textContent = "Скрыть";
    div.style.height = "100%";
  } else {
    showMore.textContent = "Показать все";
    div.style.height = "200px";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;
    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper != undefined) swiper.destroy(true, true);
        return;
      }
    };
    breakpoint.addEventListener("change", checker);
    checker();
  };

  resizableSwiper("(max-width: 500px)", ".swiper", {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1.25,
    watchSlidesProgress: true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

