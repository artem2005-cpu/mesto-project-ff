import { handleImageClick } from '../scripts/index.js'
import { createCard } from './card.js'
import {
	addForm,
	editAvatarForm,
	editProfileForm,
	placesList,
	profileDescription,
	profileTitle,
} from './forms.js'
const profileImg = document.querySelector('.profile__image')
const config = {
	baseUrl: 'https://nomoreparties.co/v1/wff-cohort-19',
	headers: {
		authorization: '7c9b02fa-ac4c-4738-ade8-6c89ed6b63c1',
		'Content-Type': 'application/json',
	},
}
let userId = null
function loading(isLoading, formElement) {
	const buttonElement = formElement.querySelector('.popup__button')
	if (isLoading) {
		buttonElement.textContent = 'Сохранение...'
	} else {
		buttonElement.textContent = 'Сохранить'
	}
}
function getUserInfo() {
	return fetch(`${config.baseUrl}/users/me`, {
		method: 'GET',
		headers: config.headers,
	})
		.then(res => {
			if (res.ok) {
				return res.json()
			}
			return Promise.reject(`Ошибка: ${res.status}`)
		})
		.then(data => {
			profileTitle.textContent = data.name
			profileDescription.textContent = data.about
			profileImg.src = data.avatar
			userId = data._id
			document.querySelector(
				'.profile__image'
			).style.backgroundImage = `url(${data.avatar})`
		})
		.catch(err => console.log(err))
}

function getImages() {
	return fetch(`${config.baseUrl}/cards`, {
		method: 'GET',
		headers: config.headers,
	})
		.then(res => {
			if (res.ok) {
				return res.json()
			}
			return Promise.reject(`Ошибка: ${res.status}`)
		})
		.then(data => {
			data.forEach(element => {
				const cardElement = createCard(
					element.link,
					element.name,
					handleImageClick,
					element.likes.length,
					element.owner._id,
					element._id,
					element.likes
				)
				placesList.append(cardElement)
			})
		})
		.catch(err => console.log(err))
}

function editingUserInfo(name, about) {
	loading(true, editProfileForm)
	return fetch(`${config.baseUrl}/users/me`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			name: name,
			about: about,
		}),
	})
		.then(res => {
			if (res.ok) {
				return res.json()
			}
			return Promise.reject(`Ошибка: ${res.status}`)
		})
		.then(data => {
			profileTitle.textContent = data.name
			profileDescription.textContent = data.about
			getUserInfo()
		})
		.catch(err => console.log(err))
		.finally(() => loading(false, editProfileForm))
}
function addNewCard(name, link) {
	loading(true, addForm)
	return fetch(`${config.baseUrl}/cards`, {
		method: 'POST',
		headers: config.headers,
		body: JSON.stringify({
			name: name,
			link: link,
		}),
	})
		.then(res => {
			if (res.ok) {
				return res.json()
			}
			return Promise.reject(`Ошибка: ${res.status}`)
		})
		.then(data => {
			const cardElement = createCard(
				data.link,
				data.name,
				handleImageClick,
				data.likes.length,
				data.owner._id,
				data._id,
				data.likes
			)
			placesList.prepend(cardElement)
		})
		.catch(err => console.log(err))
		.finally(() => loading(false, addForm))
}

function deleteCard(evt, cardId) {
	return fetch(`${config.baseUrl}/cards/${cardId}`, {
		method: 'DELETE',
		headers: config.headers,
	})
		.then(res => {
			if (res.ok) {
				return res.json()
			}
			return Promise.reject(`Ошибка: ${res.status}`)
		})
		.then(() => {
			evt.closest('.card').remove()
		})
		.catch(err => console.log(err))
}
function likeCard(evt, cardId) {
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method: 'PUT',
		headers: config.headers,
	})
		.then(res => {
			if (res.ok) {
				return res.json()
			}
			return Promise.reject(`Ошибка: ${res.status}`)
		})
		.then(data => {
			evt.classList.add('card__like-button_is-active')
			evt.nextElementSibling.textContent = data.likes.length
		})
		.catch(err => console.log(err))
}

function deleteLikeCard(evt, cardId) {
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method: 'DELETE',
		headers: config.headers,
	})
		.then(res => {
			if (res.ok) {
				return res.json()
			}
			return Promise.reject(`Ошибка: ${res.status}`)
		})
		.then(data => {
			evt.classList.remove('card__like-button_is-active')
			evt.nextElementSibling.textContent = data.likes.length
		})
		.catch(err => console.log(err))
}

function changeAvatar(avatar) {
	loading(true, editAvatarForm)
	return fetch(`${config.baseUrl}/users/me/avatar`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			avatar: avatar,
		}),
	})
		.then(res => {
			if (res.ok) {
				return res.json()
			}
			return Promise.reject(`Ошибка: ${res.status}`)
		})
		.then(data => {
			profileImg.style.backgroundImage = `url(${data.avatar})`
		})
		.catch(err => console.log(err))
		.finally(() => loading(false, editAvatarForm))
}
export {
	addNewCard,
	changeAvatar,
	deleteCard,
	deleteLikeCard,
	editingUserInfo,
	getImages,
	getUserInfo,
	likeCard,
	userId,
}
