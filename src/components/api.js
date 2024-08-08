import { handleImageClick } from '../scripts/index.js'
import { createCard, likeCard } from './card.js'
import { placesList, profileDescription, profileTitle } from './forms.js'
const profileImg = document.querySelector('.profile__image')
const config = {
	baseUrl: 'https://nomoreparties.co/v1/wff-cohort-19',
	headers: {
		authorization: '7c9b02fa-ac4c-4738-ade8-6c89ed6b63c1',
		'Content-Type': 'application/json',
	},
}
let userId = null
function getUserInfo() {
	return fetch(`${config.baseUrl}/users/me`, {
		method: 'GET',
		headers: config.headers,
	})
		.then(res => res.json())
		.then(data => {
			profileTitle.textContent = data.name
			profileDescription.textContent = data.about
			profileImg.src = data.avatar
			userId = data._id
		})
}

function getImages() {
	return fetch(`${config.baseUrl}/cards`, {
		method: 'GET',
		headers: config.headers,
	})
		.then(res => res.json())
		.then(data => {
			data.forEach(element => {
				const cardElement = createCard(
					element.link,
					element.name,
					likeCard,
					handleImageClick,
					element.likes.length,
					element.owner._id
				)
				placesList.append(cardElement)
			})
		})
}

function editingUserInfo(name, about) {
	return fetch(`${config.baseUrl}/users/me`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			name: name,
			about: about,
		}),
	})
}
function addNewCard(name, link) {
	return fetch(`${config.baseUrl}/cards`, {
		method: 'POST',
		headers: config.headers,
		body: JSON.stringify({
			name: name,
			link: link,
		}),
	})
}
export { addNewCard, editingUserInfo, getImages, getUserInfo, userId }
