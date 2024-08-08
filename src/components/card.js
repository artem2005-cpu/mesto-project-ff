import { deleteCard, userId } from './api.js'
const createCard = (
	link,
	name,
	like,
	deleteLikeCard,
	handleImageClick,
	likeCount,
	userIdOfCard,
	cardId,
	elementLikes
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
	likeButton.addEventListener('click', () => like(likeButton, cardId))
	likeButton.classList.remove('card__like-button_is-active')
	elementLikes.forEach(element => {
		if (element._id === userId) {
			likeButton.classList.add('card__like-button_is-active')
			likeButton.removeEventListener('click', () => like(likeButton, cardId))
			likeButton.addEventListener('click', () =>
				deleteLikeCard(likeButton, cardId)
			)
		}
	})

	cardImage.src = link
	cardImage.alt = name
	cardName.textContent = name
	likes.textContent = likeCount
	cardImage.addEventListener('click', () => handleImageClick(link, name))
	deleteButtons.addEventListener('click', () => deleteCard(cardId))
	if (userIdOfCard !== userId) {
		deleteButtons.remove()
	}
	return cardTemplate
}

export { createCard }
