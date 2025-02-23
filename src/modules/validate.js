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

  const formValidator = (formId) => {
    const form = document.getElementById(formId);
    const formInputs = form.querySelectorAll("input");

    let isError = false;

    formInputs.forEach((elem) => {
      elem.addEventListener("blur", () => {
        elem.value = elem.value.replace(/^\-+/g, "");
        elem.value = elem.value.replace(/\-+$/g, "");
        elem.value = elem.value.replace(/[ ]+/g, " ");
        elem.value = elem.value.replace(/^[ ]+/g, "");
        elem.value = elem.value.replace(/[ ]+$/g, "");
        elem.value = elem.value.replace(/[\-]+/g, "-");
        switch (elem.type) {
          case "text":
            elem.value = elem.value.replace(/[^а-яА-Я \-]/g, "");
            elem.value = elem.value.replace(/[а-яА-Я]+/g, (str) => {
              return str.slice(0, 1).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase();
            });
            if (/[а-яА-Я\- ]/g.test(elem.value) || !elem.value === "") {
              isError = false;
            } else {
              isError = true;
            }
            break;
          case "email":
            elem.value = elem.value.replace(/[^\w@\-_.!~*']/g, "");
            if (/[\w@\-_.!~*']/g.test(elem.value) || !elem.value === "") {
              isError = false;
            } else {
              isError = true;
            }
            break;
          case "tel":
            elem.value = elem.value.replace(/[^1-9\(\)\-\+ ]/g, "");
            if (/[1-9\(\)\-\+\ ]/g.test(elem.value) || !elem.value === "") {
              isError = false;
            } else {
              isError = true;
            }
            break;
        }
      });
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!isError) {
        alert("Данные отправлены!");
        formInputs.forEach((elem) => {
          elem.value = "";
        });
      } else {
        alert("Проверьте правильность введенных данных");
      }
    });
  };

  calc();
  formValidator("form1");
  formValidator("form2");
};

export default validate;
