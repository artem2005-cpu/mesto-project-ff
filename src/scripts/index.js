// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

import { createCard, likeCard } from '../components/card.js'
import { handleAddFormSubmit, handleFormSubmit } from '../components/forms.js'
import { openPopup } from '../components/modal.js'
import '../pages/index.css'
import { initialCards } from './cards.js'
const placesList = document.querySelector('.places__list')

const editBtn = document.querySelector('.profile__edit-button')
const editPop = document.querySelector('.popup_type_edit')
const addBtn = document.querySelector('.profile__add-button')
const newPop = document.querySelector('.popup_type_new-card')
const imgPop = document.querySelector('.popup_type_image')
const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

editBtn.addEventListener('click', () => openPopup(editPop))
addBtn.addEventListener('click', () => openPopup(newPop))
const profileForm = document.querySelector('[name="edit-profile"]')
const nameInput = profileForm.querySelector('.popup__input_type_name')
const jobInput = profileForm.querySelector('.popup__input_type_description')
const addForm = document.querySelector('[name="new-place"]')
const placeInput = addForm.querySelector('.popup__input_type_card-name')
const linkInput = addForm.querySelector('.popup__input_type_url')

profileForm.addEventListener('submit', handleFormSubmit)

addForm.addEventListener('submit', handleAddFormSubmit)
const closePop = document.querySelectorAll('.popup__close')
closePop.forEach(close => {
	close.addEventListener('click', () => {
		editPop.classList.remove('popup_is-opened')
		newPop.classList.remove('popup_is-opened')
		imgPop.classList.remove('popup_is-opened')
	})
})

initialCards.forEach(cardData => {
	const cardElement = createCard(
		cardData.link,
		cardData.name,
		likeCard,
		openPopup
	)
	placesList.append(cardElement)
})
export {
	editPop,
	imgPop,
	jobInput,
	linkInput,
	nameInput,
	newPop,
	placeInput,
	placesList,
	profileDescription,
	profileTitle,
}
