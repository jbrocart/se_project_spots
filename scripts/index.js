const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: " https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Stormy sky",
    link: "https://images.unsplash.com/photo-1687847631776-6f1af4b626fb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sunset over the ocean",
    link: "https://images.unsplash.com/photo-1496482475496-a91f31e0386c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Canyon Arch",
    link: "https://images.unsplash.com/photo-1430797877645-98aa0693fb34?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Beautiful Milky Way in the mountains",
    link: "https://images.unsplash.com/photo-1547534887-8d299f2c126b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Red fish in coral",
    link: "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Camping in the mountains uder the stars",
    link: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const editProfileModal = document.querySelector("#edit-profile-modal");
const addCardModal = document.querySelector("#add-card-modal");
const profileEditButton = document.querySelector(".profile__edit-btn");
const addPostButton = document.querySelector(".profile__add-btn");
const closeButtons = document.querySelectorAll(".modal__close-btn");
const profileFormElement = document.querySelector(".modal__form");
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);
const addCardFormElement = addCardModal.querySelector(".modal__form");

const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#card-url-input");

const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__caption");

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  const cardLikeBtnEl = cardElement.querySelector(".card__like-btn");
  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__like-btn_active");
  });

  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-btn");
  cardDeleteBtnEl.addEventListener("click", () => {
    cardElement.remove();
    cardElement = null;
  });

  cardImageEl.addEventListener("click", () => {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaption.textContent = data.name;

    openModal(previewModal);
  });

  return cardElement;
}

editProfileNameInput.value = profileNameElement.textContent;
editProfileDescriptionInput.value = profileDescriptionElement.textContent;

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  closeModal(editProfileModal);
  evt.preventDefault();

  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;
}

function handleAddCardSubmit(evt) {
  closeModal(addCardModal);
  evt.preventDefault();

  console.log("Title:", cardTitleInput.value);
  console.log("Image URL:", cardUrlInput.value);
}

profileEditButton.addEventListener("click", () => openModal(editProfileModal));
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

previewModalCloseBtn.addEventListener("click", () => {
    closeModal(previewModal);
});

addPostButton.addEventListener("click", () => openModal(addCardModal));
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

addCardFormElement.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const inputValues = {
    name: cardTitleInput.value,
    link: cardUrlInput.value,
  };

  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  addCardModal.classList.remove("modal_opened");
});

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardsList.append(cardElement);
});
