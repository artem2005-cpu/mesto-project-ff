import { handleImageClick } from '../scripts/index.js'
import {
	addNewCard,
	changeAvatar,
	editingUserInfo,
	getUserInfo,
} from './api.js'
import { createCard } from './card.js'
import { closePopup } from './modal.js'
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
const profileImg = document.querySelector('.profile__image')
const profileDescription = document.querySelector('.profile__description')

function handleProfileFormSubmit(evt) {
	evt.preventDefault()
	editingUserInfo(nameInput.value, jobInput.value).then(data => {
		profileTitle.textContent = data.name
		profileDescription.textContent = data.about
		closePopup(editPop)
		getUserInfo()
	})
}
function handleProfileAvatarFormSubmit(evt) {
	evt.preventDefault()
	changeAvatar(avatarInput.value).then(data => {
		profileImg.style.backgroundImage = `url(${data.avatar})`
		closePopup(editAvatarPop)
	})
	editAvatarForm.reset()
}
function handleAddFormSubmit(evt) {
	evt.preventDefault()
	addNewCard(placeInput.value, linkInput.value).then(data => {
		const cardElement = createCard(
			data.link,
			data.name,
			handleImageClick,
			data.likes.length,
			data.owner._id,
			data._id,
			data.likes
		)
		placesList.prepend(cardElement)
		closePopup(newPop)
	})
	addForm.reset()
}
function loading(isLoading, formElement) {
	const buttonElement = formElement.querySelector('.popup__button')
	if (isLoading) {
		buttonElement.textContent = 'Сохранение...'
	} else {
		buttonElement.textContent = 'Сохранить'
	}
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
	loading,
	nameInput,
	newPop,
	placeInput,
	placesList,
	profileDescription,
	profileImg,
	profileTitle,
}
