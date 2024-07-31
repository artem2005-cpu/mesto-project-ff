import { createCard, editPop, likeCard, placesList } from './card.js'
import { closePopup, newPop, openPopup } from './modal.js'
const addForm = document.querySelector('[name="new-place"]')
const editProfileForm = document.querySelector('[name="edit-profile"]')
const profileTitle = document.querySelector('.profile__title')
const placeInput = addForm.querySelector('.popup__input_type_card-name')
const jobInput = editProfileForm.querySelector('.popup__input_type_description')
const linkInput = addForm.querySelector('.popup__input_type_url')
const nameInput = editProfileForm.querySelector('.popup__input_type_name')

const profileDescription = document.querySelector('.profile__description')

function handleFormSubmit(evt) {
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
		openPopup
	)
	placesList.prepend(newCard)
	closePopup(newPop)
	linkInput.value = ''
	placeInput.value = ''
}
export {
	addForm,
	editProfileForm,
	handleAddFormSubmit,
	handleFormSubmit,
	jobInput,
	nameInput,
	profileDescription,
	profileTitle,
}
