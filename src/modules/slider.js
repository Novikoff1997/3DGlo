const slider = () => {
  // portfolio-item-active
  const sliderBlock = document.querySelector(".portfolio-content");
  const slides = document.querySelectorAll(".portfolio-item");
  const portfolioDots = document.querySelector(".portfolio-dots");
  const timeInterval = 2000;

  let dots;
  let currenSlide = 0;
  let interval;

  const setDots = () => {
    let slidesCount = slides.length;
    for (let i = 0; i < slidesCount; i++) {
      const dotElement = document.createElement("li");
      dotElement.classList.add("dot");
      portfolioDots.append(dotElement);
    }
    getDots();
  };

  const getDots = () => {
    dots = document.querySelectorAll(".dot");
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };
  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currenSlide, "portfolio-item-active");
    prevSlide(dots, currenSlide, "dot-active");
    currenSlide++;
    if (currenSlide >= slides.length) {
      currenSlide = 0;
    }
    nextSlide(slides, currenSlide, "portfolio-item-active");
    nextSlide(dots, currenSlide, "dot-active");
  };
  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.matches(".dot, .portfolio-btn")) {
      return;
    }

    prevSlide(slides, currenSlide, "portfolio-item-active");
    prevSlide(dots, currenSlide, "dot-active");

    if (e.target.matches("#arrow-right")) {
      currenSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currenSlide--;
    } else if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currenSlide = index;
        }
      });
    }
    if (currenSlide >= slides.length) {
      currenSlide = 0;
    }
    if (currenSlide < 0) {
      currenSlide = slides.length - 1;
    }
    nextSlide(slides, currenSlide, "portfolio-item-active");
    nextSlide(dots, currenSlide, "dot-active");
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        stopSlide();
      }
    },
    true
  );
  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        startSlide(timeInterval);
      }
    },
    true
  );
  setDots();
  startSlide(timeInterval);
};

export default slider;
