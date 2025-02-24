const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const menuCloseBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  menu.addEventListener("click");

  menuBtn.addEventListener("click", handleMenu);

  menuCloseBtn.addEventListener("click", handleMenu);

  menuItems.forEach((menuItem) => menuItem.addEventListener("click", handleMenu));
};

export default menu;
