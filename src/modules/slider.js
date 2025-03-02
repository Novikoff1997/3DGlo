const slider = (
  sliderSelector,
  slidesSelector,
  dotActive = "dot-active",
  slideActive = "slide-active"
) => {
  const sliderBlock = document.querySelector(sliderSelector);
  const slides = document.querySelectorAll(slidesSelector);
  const timeInterval = 2000;

  let dots;
  let currenSlide = 0;
  let interval;

  console.log(sliderBlock);
  console.log(slides.length);

  if (!sliderBlock || slides.length === 0) {
    return;
  }

  const setDots = () => {
    const portfolioDots = document.querySelector(".portfolio-dots");
    const slidesCount = slides.length;
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
    prevSlide(slides, currenSlide, slideActive);
    prevSlide(dots, currenSlide, dotActive);
    currenSlide++;
    if (currenSlide >= slides.length) {
      currenSlide = 0;
    }
    nextSlide(slides, currenSlide, slideActive);
    nextSlide(dots, currenSlide, dotActive);
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

    prevSlide(slides, currenSlide, slideActive);
    prevSlide(dots, currenSlide, dotActive);

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
    nextSlide(slides, currenSlide, slideActive);
    nextSlide(dots, currenSlide, dotActive);
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
