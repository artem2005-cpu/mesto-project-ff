import { addNewCard, changeAvatar, editingUserInfo } from './api.js'
const addForm = document.forms['new-place']
const newPop = document.querySelector('.popup_type_new-card')
const editPop = document.querySelector('.popup_type_edit')

const placesList = document.querySelector('.places__list')
const editProfileForm = document.forms['edit-profile']
const profileTitle = document.querySelector('.profile__title')
const placeInput = addForm.querySelector('.popup__input_type_card-name')
const jobInput = editProfileForm.querySelector('.popup__input_type_description')
const linkInput = addForm.querySelector('.popup__input_type_url')
const editAvatarForm = document.forms['edit-profile-avatar']
const editAvatarPop = document.querySelector('.popup_type_edit_avatar')
const avatarInput = editAvatarForm.querySelector('.popup__input_type_url')
const nameInput = editProfileForm.querySelector('.popup__input_type_name')

const profileDescription = document.querySelector('.profile__description')

function handleProfileFormSubmit(evt) {
	evt.preventDefault()
	editingUserInfo(nameInput.value, jobInput.value)
}
function handleProfileAvatarFormSubmit(evt) {
	evt.preventDefault()
	changeAvatar(avatarInput.value)
	editAvatarForm.reset()
}
function handleAddFormSubmit(evt) {
	evt.preventDefault()
	addNewCard(placeInput.value, linkInput.value)
	addForm.reset()
}
export {
	addForm,
	editAvatarForm,
	editAvatarPop,
	editPop,
	editProfileForm,
	handleAddFormSubmit,
	handleProfileAvatarFormSubmit,
	handleProfileFormSubmit,
	jobInput,
	linkInput,
	nameInput,
	newPop,
	placeInput,
	placesList,
	profileDescription,
	profileTitle,
}
