const scroll = () => {
  const scrollBtn = document.querySelector("main>a");
  const menuButtons = document.querySelectorAll("menu>ul>li>a");

  let scrollNow = 0;
  let idInterval;

  document.addEventListener("scroll", () => {
    scrollNow = document.documentElement.scrollTop;
  });

  const smoothScroll = (goTo) => {
    let diff = scrollNow - goTo;
    let step = Math.abs(Math.floor(diff * 0.1));
    idInterval = requestAnimationFrame(() => smoothScroll(goTo));

    if (scrollNow < goTo) {
      scrollNow = scrollNow + step;
      window.scrollTo(0, scrollNow);
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  scrollBtn.addEventListener("click", (event) => {
    event.preventDefault();
    smoothScroll(830);
  });

  menuButtons.forEach((menuButton, index) => {
    menuButton.addEventListener("click", (event) => {
      event.preventDefault();
      switch (index) {
        case 0:
          smoothScroll(857);
          break;
        case 1:
          smoothScroll(2077);
          break;
        case 2:
          smoothScroll(3060);
          break;
        case 3:
          smoothScroll(4212);
          break;
        case 4:
          smoothScroll(5046);
          break;
      }
    });
  });
};

export default scroll;
