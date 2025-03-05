import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const modalContent = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const windowWidth = document.documentElement.clientWidth;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
      if (windowWidth > 768) {
        animate({
          duration: 150,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalContent.style.transform = `translateX(${progress * 50}px)`;
          },
        });
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
      modal.style.display = "none";
    }
  });
};

export default modal;
