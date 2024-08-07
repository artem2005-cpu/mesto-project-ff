import { profileDescription, profileTitle } from './forms.js'
const profileImg = document.querySelector('.profile__image')
const config = {
	baseUrl: 'https://nomoreparties.co/v1/wff-cohort-19',
	headers: {
		authorization: '7c9b02fa-ac4c-4738-ade8-6c89ed6b63c1',
		'Content-Type': 'application/json',
	},
}
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
		})
}

export { getUserInfo }
