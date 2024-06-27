// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const placesList = document.querySelector('.places__list')
const createCard = (link, name) => {
	const cardTemplate = document
		.querySelector('#card-template')
		.content.querySelector('.card')
		.cloneNode(true)
	const cardImage = cardTemplate.querySelector('.card__image')
	const cardName = cardTemplate.querySelector('.card__title')
	const deleteButtons = cardTemplate.querySelector('.card__delete-button')
	cardImage.src = link
	cardName.textContent = name
	deleteButtons.addEventListener('click', deleteCard)
	return cardTemplate
}
initialCards.forEach(cardData => {
	const cardElement = createCard(cardData.link, cardData.name)
	placesList.append(cardElement)
})
function deleteCard(event) {
	const card = event.target.closest('.card')
	card.remove()
}
