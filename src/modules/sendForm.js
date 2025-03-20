import { animate } from "./helpers";

const sendForm = ({ formsId, someElem = [] }) => {
  const statusBlock = document.createElement("div");
  const errorText = "Ошибка";
  const successText = "Спасибо! Наш менеджер с вами свяжется";
  const statusText = "|";

  const validate = (list) => {
    let success = true;
    list.forEach((elem) => {
      if (!elem.classList.contains("success")) {
        success = false;
      }
    });
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json);
  };

  const submitForm = (form) => {
    const formInputs = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};
    statusBlock.innerHTML = '<img src="./images/preload.gif" alt="" style="width: 30px;" />';
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    console.log("sybmit");

    if (validate(formInputs)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formInputs.forEach((input) => {
            input.value = "";
            input.classList.remove("success");
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Данные не валидны!");
    }
  };

  formsId.forEach((formId) => {
    const form = document.getElementById(formId);
    try {
      if (!form) {
        throw new Error(`Форма с id ${formId} не найдена!`);
      }

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        submitForm(form);
      });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export default sendForm;
