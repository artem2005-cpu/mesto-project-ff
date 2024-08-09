import { userId } from '../scripts/index.js'
import { deleteCard, deleteLikeCard, likeCard } from './api.js'
function setLikeEventListener(cardId, likeButton) {
	if (likeButton.classList.contains('card__like-button_is-active')) {
		deleteLikeCard(likeButton, cardId).then(data => {
			likeButton.classList.remove('card__like-button_is-active')
			likeButton.nextElementSibling.textContent = data.likes.length
		})
	} else {
		likeCard(likeButton, cardId).then(data => {
			likeButton.classList.add('card__like-button_is-active')
			likeButton.nextElementSibling.textContent = data.likes.length
		})
	}
}
const createCard = (
	link,
	name,
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
	let hasMineLike = false
	elementLikes.forEach(element => {
		if (element._id === userId) {
			hasMineLike = true
		}
	})
	if (hasMineLike) {
		likeButton.classList.add('card__like-button_is-active')
	}
	likeButton.addEventListener('click', () => {
		setLikeEventListener(cardId, likeButton)
	})
	cardImage.src = link
	cardImage.alt = name
	cardName.textContent = name
	likes.textContent = likeCount
	cardImage.addEventListener('click', () => handleImageClick(link, name))
	deleteButtons.addEventListener('click', () =>
		deleteCard(deleteButtons, cardId).then(() =>
			deleteButtons.closest('.card').remove()
		)
	)
	if (userIdOfCard !== userId) {
		deleteButtons.remove()
	}
	return cardTemplate
}

export { createCard }
