const editPop = document.querySelector('.popup_type_edit')
const imgPop = document.querySelector('.popup_type_image')
const placesList = document.querySelector('.places__list')
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
	cardName.textContent = name

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
export { createCard, editPop, imgPop, likeCard, placesList }
