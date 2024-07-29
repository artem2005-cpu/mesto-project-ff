import {
	editPop,
	jobInput,
	linkInput,
	nameInput,
	newPop,
	placeInput,
	placesList,
	profileDescription,
	profileTitle,
} from '../scripts/index.js'
import { createCard, likeCard } from './card.js'
import { openPopup } from './modal.js'
function handleFormSubmit(evt) {
	evt.preventDefault()
	profileTitle.textContent = nameInput.value
	profileDescription.textContent = jobInput.value
	editPop.classList.remove('popup_is-opened')
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
	newPop.classList.remove('popup_is-opened')
}
export { handleAddFormSubmit, handleFormSubmit }
