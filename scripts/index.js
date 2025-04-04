const initialCards = [
  {name: "Stormy sky", link: "https://unsplash.com/photos/a-beach-hut-sitting-on-top-of-a-sandy-beach-5VaF7hzo4wc"},
  {name: "Sunset over the ocean", link: "https://unsplash.com/photos/silhouette-of-stone-on-seashore-during-golden-hour-63JKK67yGUE"},
  {name: "Canyon Arch", link: "https://unsplash.com/photos/grand-canyon-mountain-tNN6zkUnTgg"},
  {name: "Beautiful Milky Way in the mountains", link: "https://unsplash.com/photos/pine-trees-during-nighttime-7pUHeP1GRC4"},
  {name: "Red fish in coral", link: "https://unsplash.com/photos/red-fish-beside-pink-coral-EDfZ0Sjmp_w"},
  {name: "Camping in the mountains uder the stars", link: "https://unsplash.com/photos/person-sitting-near-bonfire-surrounded-by-trees-1azAjl8FTnU"},
];

const editProfileModal = document.querySelector('#edit-profile-modal');
const profileNameElement = document.querySelector('.profile__name');
const profileDescriptionElement = document.querySelector('.profile__description');
const profileEditButton = document.querySelector('.profile__edit-btn');
const profileFormElement = editProfileModal.querySelector('.modal__form');
const editProfileNameInput = editProfileModal.querySelector('#profile-name-input');
const editProfileDescriptionInput = editProfileModal.querySelector('#profile-description-input');
const closeButton = document.querySelector('.modal__close-btn');
const addCardFormElement = editProfileModal.querySelector('#addCardModal');
const nameInput = editProfileModal.querySelector('.add_card');
const linkInput = editProfileModal.querySelector('#card-url-input');
const addCardModal = document.querySelector('#add-card-modal');
const addPostButton = document.querySelector('.profile__add-btn');
const cardTitleInput = document.querySelector('#cardTitleInput');

editProfileNameInput.value = profileNameElement.textContent;
editProfileDescriptionInput.value = profileDescriptionElement.textContent;

function openModal() {
  editProfileModal.classList.add('modal_opened');
}

function closeModal() {
  editProfileModal.classList.remove('modal_opened');
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

profileNameElement.textContent = editProfileNameInput.value;
profileDescriptionElement.textContent = editProfileDescriptionInput.value;

closeModal();
}

function openAddCardModal() {
  addCardModal.classList.add('modal_opened');
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(titleInput.value);
  console.log(linkInput.value);

  closeModal();
}

profileEditButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
addPostButton.addEventListener('click', openAddCardModal);
addCardFormElement.addEventListener('submit', handleAddCardSubmit);
profileFormElement.addEventListener('submit', handleProfileFormSubmit);
