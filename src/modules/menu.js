const menu = () => {
  const menu = document.querySelector("menu");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  const toggleMenu = () => {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".menu")) {
        handleMenu();
      } else if (e.target.closest(".active-menu") && e.target.tagName === "A") {
        handleMenu();
      } else if (!e.target.closest(".active-menu") && menu.classList.contains("active-menu")) {
        handleMenu();
      }
    });
  };

  toggleMenu();
};

export default menu;
