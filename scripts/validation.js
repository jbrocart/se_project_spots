const showInputError = (formEl, inputEl, errorMessage) => {
  const errorMessageEl = document.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add(`#${inputEl.id}-error`)
  errorMessageEl.textContent = errorMessage;
  errorMessageEl.classList.add("#" + errorMessageID);
};

const hideInputError = (formEl, inputEl) => {
    const errorMessageEl = document.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove("#" = errorMessageID);
    errorMessageEl.classList.remove("#" + errorMessageID);
    errorMessageEl.textContent = "";
}

const checkInputValidity = (formEl, inputEl) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
};

const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
  const buttonEl = formEl.querySelector(".modal__save-btn");

  // TODO -
  // toggleButtonState(inputList, buttonEl);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", function () {
      checkInputValidity(formEl, inputEl);
      // toggleButtonState(inputList, buttonEl);
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
