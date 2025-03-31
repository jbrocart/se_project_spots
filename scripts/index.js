const initialCards = [
  {name: "Stormy sky", link: "https://unsplash.com/photos/a-beach-hut-sitting-on-top-of-a-sandy-beach-5VaF7hzo4wc"},
  {name: "Sunset over the ocean", link: "https://unsplash.com/photos/silhouette-of-stone-on-seashore-during-golden-hour-63JKK67yGUE"},
  {name: "Canyon Arch", link: "https://unsplash.com/photos/grand-canyon-mountain-tNN6zkUnTgg"},
  {name: "Beautiful Milky Way in the mountains", link: "https://unsplash.com/photos/pine-trees-during-nighttime-7pUHeP1GRC4"},
  {name: "Red fish in coral", link: "https://unsplash.com/photos/red-fish-beside-pink-coral-EDfZ0Sjmp_w"},
  {name: "Camping in the mountains uder the stars", link: "https://unsplash.com/photos/person-sitting-near-bonfire-surrounded-by-trees-1azAjl8FTnU"},
];

const profileEditButton = document.querySelector('.profile__edit-btn');

const editProfileModal = document.querySelector('#edit-profile-modal');

const closeButton = document.querySelector('.modal__close-btn');

function openModal() {
  editProfileModal.classList.add('modal_opened');
}

function closeModal() {
  editProfileModal.classList.remove('modal_opened');
}

profileEditButton.addEventListener('click', openModal);

closeButton.addEventListener('click', closeModal);
