const scroll = () => {
  const scrollBtn = document.querySelector("main>a");
  const menuButtons = document.querySelectorAll("menu>ul>li>a");

  const scroll = (button) => {
    let href;
    href = button.href.replace(/.*\//, "");
    // console.log(href);
    // console.log(document.querySelector(href));

    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  };

  scrollBtn.addEventListener("click", (event) => {
    event.preventDefault();
    scroll(scrollBtn);
  });

  menuButtons.forEach((menuButton, index) => {
    menuButton.addEventListener("click", (event) => {
      event.preventDefault();
      scroll(menuButton);
    });
  });
};

export default scroll;
