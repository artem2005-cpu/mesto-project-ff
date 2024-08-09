import { addForm, editAvatarForm, editProfileForm, loading } from './forms.js'
const config = {
	baseUrl: 'https://nomoreparties.co/v1/wff-cohort-19',
	headers: {
		authorization: '7c9b02fa-ac4c-4738-ade8-6c89ed6b63c1',
		'Content-Type': 'application/json',
	},
}
function getResponseData(res) {
	if (!res.ok) {
		return Promise.reject(`Ошибка: ${res.status}`)
	}
	return res.json()
}

function getUserInfo() {
	return fetch(`${config.baseUrl}/users/me`, {
		method: 'GET',
		headers: config.headers,
	})
		.then(res => getResponseData(res))
		.catch(err => console.log(err))
}

function getImages() {
	return fetch(`${config.baseUrl}/cards`, {
		method: 'GET',
		headers: config.headers,
	})
		.then(res => getResponseData(res))
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
		.then(res => getResponseData(res))
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
		.then(res => getResponseData(res))
		.catch(err => console.log(err))
		.finally(() => loading(false, addForm))
}

function deleteCard(evt, cardId) {
	return fetch(`${config.baseUrl}/cards/${cardId}`, {
		method: 'DELETE',
		headers: config.headers,
	})
		.then(res => getResponseData(res))
		.catch(err => console.log(err))
}
function likeCard(evt, cardId) {
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method: 'PUT',
		headers: config.headers,
	})
		.then(res => getResponseData(res))
		.catch(err => console.log(err))
}

function deleteLikeCard(evt, cardId) {
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method: 'DELETE',
		headers: config.headers,
	})
		.then(res => getResponseData(res))
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
		.then(res => getResponseData(res))
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
}
