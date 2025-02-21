const validate = () => {
  const calc = () => {
    const calc = document.querySelector(".calc-block");
    const calcInputs = calc.querySelectorAll("input");

    calcInputs.forEach((elem) => {
      elem.addEventListener("input", (event) => {
        event.target.value = event.target.value.replace(/\D+/g, "");
      });
    });
  };

  const formValidte = (formId) => {
    const form = document.getElementById(formId);
    const formInputs = form.querySelectorAll("input");

    const invalid = (elem) => {
      elem.classList.add("form-control");
      elem.classList.add("is-invalid");
    };
    const valid = (elem) => {
      elem.classList.remove("form-control");
      elem.classList.remove("is-invalid");
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let isError = false;

      formInputs.forEach((elem) => {
        switch (elem.type) {
          case "text":
            if (/[^а-яА-Я\s\-]/g.test(elem.value)) {
              invalid(elem);
              isError = true;
            } else {
              valid(elem);
            }
            break;
          case "email":
            if (/[^\w@\-_.!~*']/g.test(elem.value)) {
              invalid(elem);
              isError = true;
            } else {
              valid(elem);
            }
            break;
          case "tel":
            if (/[^1-9\(\)\-\+\ ]/g.test(elem.value)) {
              invalid(elem);
              isError = true;
            } else {
              valid(elem);
            }
            break;
        }
      });
      if (!isError) {
        alert("Данные отправлены!");
      } else {
        alert("Проверьте правильность введенных данных");
      }
    });
  };

  calc();
  formValidte("form1");
  formValidte("form2");
};

export default validate;
