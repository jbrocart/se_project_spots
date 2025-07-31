const showInputError = (formEl, inputEl, errorMessage) => {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add("modal__input_error_state");
  errorMessageEl.textContent = errorMessage;
};

const hideInputError = (formEl, inputEl) => {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove("modal__input_error_state");
  errorMessageEl.textContent = "";
};

const checkInputValidity = (formEl, inputEl) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((element) => {
    return !element.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonEl) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonEl);
  } else {
    buttonEl.classList.remove("modal__save-btn_disabled");
    buttonEl.disabled = false;
  }
};

const disableButton = (buttonEl) => {
  buttonEl.classList.add("modal__save-btn_disabled");
    buttonEl.disabled = true;
}

const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
  const buttonEl = formEl.querySelector(".modal__save-btn");

  toggleButtonState(inputList, buttonEl);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", function () {
      checkInputValidity(formEl, inputEl);
      toggleButtonState(inputList, buttonEl);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll(".modal__form");
  formList.forEach((formEl) => {
    setEventListeners(formEl);
  });
};

enableValidation();
