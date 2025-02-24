const modal = () => {
  const modal = document.querySelector(".popup");
  const modalContent = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const windowWidth = document.documentElement.clientWidth;

  let count = -50;
  let idInterval;

  const modalAnimate = () => {
    if (windowWidth > 768) {
      count = count + 5; // Чем больше цифра тем выше скорость анимации
      idInterval = requestAnimationFrame(modalAnimate);
      if (count <= 0) {
        modalContent.style.transform = `translateX(${count}px)`;
      }
    }
  };
  const resetAnimate = () => {
    modalContent.style.transform = "";
    cancelAnimationFrame(idInterval);
    count = -50;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
      modalAnimate();
    });
  });

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
      modal.style.display = "none";
      resetAnimate();
    }
  });
};

export default modal;
