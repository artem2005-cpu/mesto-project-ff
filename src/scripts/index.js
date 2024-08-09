// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
import {
	addNewCard,
	changeAvatar,
	editingUserInfo,
	getImages,
	getUserInfo,
} from '../components/api.js'
import { createCard } from '../components/card.js'

import { closePopup, openPopup } from '../components/modal.js'
import { clearValidation, enableValidation } from '../components/validation.js'
import '../pages/index.css'
const imgPop = document.querySelector('.popup_type_image')
const profileEditBtn = document.querySelector('.profile__edit-button')
const profileEditAvatarBtn = document.querySelector('.profile__image')
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
const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible',
}
const profileAddBtn = document.querySelector('.profile__add-button')

profileEditAvatarBtn.addEventListener('click', () => {
	openPopup(editAvatarPop)
})
profileEditBtn.addEventListener('click', () => {
	nameInput.value = profileTitle.textContent
	jobInput.value = profileDescription.textContent
	clearValidation(editPop, validationConfig)
	openPopup(editPop)
})
profileAddBtn.addEventListener('click', () => {
	clearValidation(newPop, validationConfig)
	openPopup(newPop)
})
editAvatarForm.addEventListener('submit', handleProfileAvatarFormSubmit)
editProfileForm.addEventListener('submit', handleProfileFormSubmit)
let userId = null
addForm.addEventListener('submit', handleAddFormSubmit)
function handleImageClick(link, name) {
	openPopup(imgPop)
	const img = imgPop.querySelector('.popup__image')
	img.src = link
	img.alt = name
	imgPop.querySelector('.popup__caption').textContent = name
}
function handleProfileAvatarFormSubmit(evt) {
	evt.preventDefault()
	changeAvatar(avatarInput.value).then(data => {
		profileImg.style.backgroundImage = `url(${data.avatar})`
		closePopup(editAvatarPop)
	})
	editAvatarForm.reset()
}
function handleProfileFormSubmit(evt) {
	evt.preventDefault()
	editingUserInfo(nameInput.value, jobInput.value).then(data => {
		profileTitle.textContent = data.name
		profileDescription.textContent = data.about
		closePopup(editPop)
	})
}
function handleAddFormSubmit(evt) {
	evt.preventDefault()
	addNewCard(placeInput.value, linkInput.value).then(data => {
		const cardData = {
			link: data.link,
			name: data.name,
			likes: data.likes,
			owner: data.owner,
			id: data._id,
		}
		const cardElement = createCard(cardData, handleImageClick, userId)
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
enableValidation(validationConfig)
const avatar = document.querySelector('.profile__image')

const popups = document.querySelectorAll('.popup')

popups.forEach(popup => {
	popup.classList.add('popup_is-animated')
	popup.addEventListener('mousedown', evt => {
		if (evt.target.classList.contains('popup_is-opened')) {
			closePopup(popup)
		}
		if (evt.target.classList.contains('popup__close')) {
			closePopup(popup)
		}
	})
})

Promise.all([getUserInfo(), getImages()]).then(([data, cards]) => {
	profileTitle.textContent = data.name
	profileDescription.textContent = data.about
	profileImg.src = data.avatar
	userId = data._id
	avatar.style.backgroundImage = `url(${data.avatar})`
	cards.forEach(element => {
		const cardData = {
			link: element.link,
			name: element.name,
			likes: element.likes,
			owner: element.owner,
			id: element._id,
		}
		const cardElement = createCard(cardData, handleImageClick, userId)
		placesList.append(cardElement)
	})
})
export {
	addForm,
	editAvatarForm,
	editProfileForm,
	handleImageClick,
	imgPop,
	loading,
	userId,
}
