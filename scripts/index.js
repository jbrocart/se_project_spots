const initialCards = [
  {
    name: "Stormy sky",
    link: "https://unsplash.com/photos/a-beach-hut-sitting-on-top-of-a-sandy-beach-5VaF7hzo4wc",
  },
  {
    name: "Sunset over the ocean",
    link: "https://unsplash.com/photos/silhouette-of-stone-on-seashore-during-golden-hour-63JKK67yGUE",
  },
  {
    name: "Canyon Arch",
    link: "https://unsplash.com/photos/grand-canyon-mountain-tNN6zkUnTgg",
  },
  {
    name: "Beautiful Milky Way in the mountains",
    link: "https://unsplash.com/photos/pine-trees-during-nighttime-7pUHeP1GRC4",
  },
  {
    name: "Red fish in coral",
    link: "https://unsplash.com/photos/red-fish-beside-pink-coral-EDfZ0Sjmp_w",
  },
  {
    name: "Camping in the mountains uder the stars",
    link: "https://unsplash.com/photos/person-sitting-near-bonfire-surrounded-by-trees-1azAjl8FTnU",
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

editProfileNameInput.value = profileNameElement.textContent;
editProfileDescriptionInput.value = profileDescriptionElement.textContent;

function openModal() {
  editProfileModal.classList.add("modal_opened");
}

function closeModal() {
  editProfileModal.classList.remove("modal_opened");
  addCardModal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;

  closeModal();
}

function openAddCardModal() {
  addCardModal.classList.add("modal_opened");
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log("Title:", cardTitleInput.value);
  console.log("Image URL:", cardUrlInput.value);

  closeModal();
}

profileEditButton.addEventListener("click", openModal);
closeButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});
addPostButton.addEventListener("click", openAddCardModal);
addCardFormElement.addEventListener("submit", handleAddCardSubmit);
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});
