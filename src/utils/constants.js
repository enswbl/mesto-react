export const profile = document.querySelector(".profile");
export const editProfileButton = profile.querySelector(".profile__edit-profile-button");
export const addCardButton = profile.querySelector(".profile__create-new-place-button");
export const editAvatarButton = profile.querySelector(".profile__edit-avatar-button");

export const editProfilePopup = document.querySelector(".popup-edit-profile");
export const editProfileForm = editProfilePopup.querySelector(".popup__container");
export const profileNameInput = editProfilePopup.querySelector(".popup__input_profile-name");
export const profileDescriptionInput = editProfilePopup.querySelector(".popup__input_profile-description");

export const newPlacePopup = document.querySelector(".popup-new-place");
export const newPlaceForm = newPlacePopup.querySelector(".popup__container_new-place");

export const editAvatarPopup = document.querySelector(".popup-edit-avatar");
export const editAvatarForm = editAvatarPopup.querySelector(".popup__container_avatar");

export const placeCardContainer = document.querySelector(".container");

export const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error-message_active'
}