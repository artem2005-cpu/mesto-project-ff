// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

import { createCard, likeCard } from '../components/card.js'
import {
	addForm,
	editPop,
	editProfileForm,
	handleAddFormSubmit,
	handleProfileFormSubmit,
	jobInput,
	nameInput,
	newPop,
	placesList,
	profileDescription,
	profileTitle,
} from '../components/forms.js'
import { closePopup, openPopup } from '../components/modal.js'
import '../pages/index.css'
import { initialCards } from './cards.js'
const imgPop = document.querySelector('.popup_type_image')
const profileEditBtn = document.querySelector('.profile__edit-button')

const profileAddBtn = document.querySelector('.profile__add-button')

profileEditBtn.addEventListener('click', () => {
	openPopup(editPop)

	nameInput.value = profileTitle.textContent
	jobInput.value = profileDescription.textContent
})
profileAddBtn.addEventListener('click', () => {
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

export { handleImageClick, imgPop }
