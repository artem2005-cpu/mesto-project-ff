import { userId } from './api.js'
const createCard = (
	link,
	name,
	like,
	handleImageClick,
	likeCount,
	userIdOfCard
) => {
	const cardTemplate = document
		.querySelector('#card-template')
		.content.querySelector('.card')
		.cloneNode(true)
	const cardImage = cardTemplate.querySelector('.card__image')
	const cardName = cardTemplate.querySelector('.card__title')
	const deleteButtons = cardTemplate.querySelector('.card__delete-button')
	const likeButton = cardTemplate.querySelector('.card__like-button')
	const likes = cardTemplate.querySelector('.card__like-counter')
	likeButton.addEventListener('click', () => like(likeButton))
	cardImage.src = link
	cardImage.alt = name
	cardName.textContent = name
	likes.textContent = likeCount
	cardImage.addEventListener('click', () => handleImageClick(link, name))
	deleteButtons.addEventListener('click', deleteCard)
	if (userIdOfCard !== userId) {
		deleteButtons.remove()
	}
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
