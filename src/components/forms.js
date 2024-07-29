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
import { createCard } from './card.js'
function handleFormSubmit(evt) {
	evt.preventDefault()
	profileTitle.textContent = nameInput.value
	profileDescription.textContent = jobInput.value
	editPop.classList.remove('popup_is-opened')
}

function handleAddFormSubmit(evt) {
	evt.preventDefault()
	const newCard = createCard(linkInput.value, placeInput.value)
	placesList.prepend(newCard)
	newPop.classList.remove('popup_is-opened')
}
export { handleAddFormSubmit, handleFormSubmit }
