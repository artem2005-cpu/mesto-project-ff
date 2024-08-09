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
const createCard = (cardData, handleImageClick, userId) => {
	const cardTemplate = document
		.querySelector('#card-template')
		.content.querySelector('.card')
		.cloneNode(true)
	const cardImage = cardTemplate.querySelector('.card__image')
	const cardName = cardTemplate.querySelector('.card__title')
	const deleteButtons = cardTemplate.querySelector('.card__delete-button')
	const likeButton = cardTemplate.querySelector('.card__like-button')
	const likes = cardTemplate.querySelector('.card__like-counter')
	cardData.likes.some(element => {
		if (element._id === userId) {
			likeButton.classList.add('card__like-button_is-active')
		}
	})
	likeButton.addEventListener('click', () => {
		setLikeEventListener(cardData.id, likeButton)
	})
	cardImage.src = cardData.link
	cardImage.alt = cardData.name
	cardName.textContent = cardData.name
	likes.textContent = cardData.likes.length
	cardImage.addEventListener('click', () =>
		handleImageClick(cardData.link, cardData.name)
	)
	deleteButtons.addEventListener('click', () =>
		deleteCard(deleteButtons, cardData.id).then(() =>
			deleteButtons.closest('.card').remove()
		)
	)
	if (cardData.owner._id !== userId) {
		deleteButtons.remove()
	}
	return cardTemplate
}

export { createCard }
