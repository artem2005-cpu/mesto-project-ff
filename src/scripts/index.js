// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

import {
	createCard,
	editPop,
	likeCard,
	placesList,
} from '../components/card.js'
import {
	addForm,
	editProfileForm,
	handleAddFormSubmit,
	handleFormSubmit,
} from '../components/forms.js'
import { newPop, openPopup } from '../components/modal.js'
import '../pages/index.css'
import { initialCards } from './cards.js'

const profileEditBtn = document.querySelector('.profile__edit-button')

const profileAddBtn = document.querySelector('.profile__add-button')

profileEditBtn.addEventListener('click', () => openPopup(editPop))
profileAddBtn.addEventListener('click', () => openPopup(newPop))

editProfileForm.addEventListener('submit', handleFormSubmit)

addForm.addEventListener('submit', handleAddFormSubmit)

initialCards.forEach(cardData => {
	const cardElement = createCard(
		cardData.link,
		cardData.name,
		likeCard,
		openPopup
	)
	placesList.append(cardElement)
})
