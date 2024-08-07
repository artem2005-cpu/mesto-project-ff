// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

import { getUserInfo } from '../components/api.js'
import { createCard, likeCard } from '../components/card.js'
import {
	addForm,
	editPop,
	editProfileForm,
	handleAddFormSubmit,
	handleProfileFormSubmit,
	jobInput,
	linkInput,
	nameInput,
	newPop,
	placeInput,
	placesList,
	profileDescription,
	profileTitle,
} from '../components/forms.js'
import { closePopup, openPopup } from '../components/modal.js'
import { removeErrors, setEventListeners } from '../components/validation.js'
import '../pages/index.css'
import { initialCards } from './cards.js'
const imgPop = document.querySelector('.popup_type_image')
const profileEditBtn = document.querySelector('.profile__edit-button')

const profileAddBtn = document.querySelector('.profile__add-button')

profileEditBtn.addEventListener('click', () => {
	removeErrors(editProfileForm)
	openPopup(editPop)

	nameInput.value = profileTitle.textContent
	jobInput.value = profileDescription.textContent
})
profileAddBtn.addEventListener('click', () => {
	removeErrors(addForm)

	linkInput.value = ''
	placeInput.value = ''
	openPopup(newPop)
})

editProfileForm.addEventListener('submit', handleProfileFormSubmit)

addForm.addEventListener('submit', handleAddFormSubmit)
function handleImageClick(link, name) {
	openPopup(imgPop)
	const img = imgPop.querySelector('.popup__image')
	img.src = link
	img.alt = name
	imgPop.querySelector('.popup__caption').textContent = name
}
initialCards.forEach(cardData => {
	const cardElement = createCard(
		cardData.link,
		cardData.name,
		likeCard,
		handleImageClick
	)
	placesList.append(cardElement)
})
const popups = document.querySelectorAll('.popup')

popups.forEach(popup => {
	popup.addEventListener('mousedown', evt => {
		if (evt.target.classList.contains('popup_is-opened')) {
			closePopup(popup)
		}
		if (evt.target.classList.contains('popup__close')) {
			closePopup(popup)
		}
	})
})
setEventListeners(editProfileForm)
setEventListeners(addForm)
getUserInfo()
export { handleImageClick, imgPop }
