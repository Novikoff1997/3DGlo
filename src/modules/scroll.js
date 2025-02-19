const scroll = () => {
  const scrollBtn = document.querySelector("main>a");
  const menuButtons = document.querySelectorAll("menu>ul>li>a");

  const scroll = (button) => {
    let href;
    href = button.href.replace(/.*\//, "");
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  };

  scrollBtn.addEventListener("click", (event) => {
    event.preventDefault();
    scroll(scrollBtn);
  });

  menuButtons.forEach((menuButton, index) => {
    menuButton.addEventListener("click", (event) => {
      event.preventDefault();
      switch (index) {
        case 0:
          scroll(menuButton);
          break;
        case 1:
          scroll(menuButton);
          break;
        case 2:
          scroll(menuButton);
          break;
        case 3:
          scroll(menuButton);
          break;
        case 4:
          scroll(menuButton);
          break;
      }
    });
  });
};

export default scroll;
