import { handleImageClick } from '../scripts/index.js'
import { createCard, likeCard } from './card.js'
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
const nameInput = editProfileForm.querySelector('.popup__input_type_name')

const profileDescription = document.querySelector('.profile__description')

function handleProfileFormSubmit(evt) {
	evt.preventDefault()
	profileTitle.textContent = nameInput.value
	profileDescription.textContent = jobInput.value
	closePopup(editPop)
}

function handleAddFormSubmit(evt) {
	evt.preventDefault()
	const newCard = createCard(
		linkInput.value,
		placeInput.value,
		likeCard,
		handleImageClick
	)
	placesList.prepend(newCard)
	closePopup(newPop)
	addForm.reset()
}
export {
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
}
