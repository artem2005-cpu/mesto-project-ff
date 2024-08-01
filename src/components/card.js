import { imgPop, openPopup } from './modal.js'

const createCard = (link, name, like) => {
	const cardTemplate = document
		.querySelector('#card-template')
		.content.querySelector('.card')
		.cloneNode(true)
	const cardImage = cardTemplate.querySelector('.card__image')
	const cardName = cardTemplate.querySelector('.card__title')
	const deleteButtons = cardTemplate.querySelector('.card__delete-button')
	const likeButton = cardTemplate.querySelector('.card__like-button')
	likeButton.addEventListener('click', () => like(likeButton))
	cardImage.src = link
	cardImage.alt = name
	cardName.textContent = name
	cardImage.addEventListener('click', () => {
		openPopup(imgPop)
		imgPop.querySelector('.popup__image').src = link
		imgPop.querySelector('.popup__caption').textContent = name
	})
	deleteButtons.addEventListener('click', deleteCard)
	return cardTemplate
}
function deleteCard(event) {
	const card = event.target.closest('.card')
	card.remove()
}
function likeCard(evt) {
	evt.classList.toggle('card__like-button_is-active')
}
export { createCard, likeCard }
