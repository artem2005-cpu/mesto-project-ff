// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const createCard = () => {
	const cards = initialCards.concat()
	cards.forEach(element => {
		addCard(element.link, element.name)
	})
}

const addCard = (link, name) => {
	const placesList = document.querySelector('.places__list')
	const cardTemplate = document
		.querySelector('#card-template')
		.content.cloneNode(true)
	const cardImage = cardTemplate.querySelector('.card__image')
	const cardName = cardTemplate.querySelector('.card__title')
	const removeButton = cardTemplate.querySelector('.card__delete-button')
	cardImage.src = link
	cardName.textContent = name
	removeButton.addEventListener('click', () =>
		removeButton.closest('.card').remove()
	)
	placesList.append(cardTemplate)
}
createCard()
