// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
import { getImages, getUserInfo } from '../components/api.js'
import { createCard } from '../components/card.js'
import {
	addForm,
	editAvatarForm,
	editAvatarPop,
	editPop,
	editProfileForm,
	handleAddFormSubmit,
	handleProfileAvatarFormSubmit,
	handleProfileFormSubmit,
	jobInput,
	linkInput,
	nameInput,
	newPop,
	placeInput,
	placesList,
	profileDescription,
	profileImg,
	profileTitle,
} from '../components/forms.js'
import { closePopup, openPopup } from '../components/modal.js'
import { removeErrors, setEventListeners } from '../components/validation.js'
import '../pages/index.css'
const imgPop = document.querySelector('.popup_type_image')
const profileEditBtn = document.querySelector('.profile__edit-button')
const profileEditAvatarBtn = document.querySelector('.profile__image')

const profileAddBtn = document.querySelector('.profile__add-button')

profileEditAvatarBtn.addEventListener('click', () => {
	setEventListeners(editAvatarForm)
	openPopup(editAvatarPop)
})
profileEditBtn.addEventListener('click', () => {
	removeErrors(editProfileForm)
	openPopup(editPop)

	nameInput.value = profileTitle.textContent
	jobInput.value = profileDescription.textContent
})
profileAddBtn.addEventListener('click', () => {
	removeErrors(addForm)
	setEventListeners(addForm)
	linkInput.value = ''
	placeInput.value = ''
	openPopup(newPop)
})
editAvatarForm.addEventListener('submit', handleProfileAvatarFormSubmit)
editProfileForm.addEventListener('submit', handleProfileFormSubmit)
let userId = null
addForm.addEventListener('submit', handleAddFormSubmit)
function handleImageClick(link, name) {
	openPopup(imgPop)
	const img = imgPop.querySelector('.popup__image')
	img.src = link
	img.alt = name
	imgPop.querySelector('.popup__caption').textContent = name
}
const avatar = document.querySelector('.profile__image')
getUserInfo().then(data => {
	profileTitle.textContent = data.name
	profileDescription.textContent = data.about
	profileImg.src = data.avatar
	userId = data._id
	avatar.style.backgroundImage = `url(${data.avatar})`
})
getImages().then(data => {
	data.forEach(element => {
		const cardData = {
			link: element.link,
			name: element.name,
			likes: element.likes,
			owner: element.owner,
			id: element._id,
		}
		const cardElement = createCard(cardData, handleImageClick, userId)
		placesList.append(cardElement)
	})
})
const popups = document.querySelectorAll('.popup')

popups.forEach(popup => {
	popup.classList.add('popup_is-animated')
	popup.addEventListener('mousedown', evt => {
		if (evt.target.classList.contains('popup_is-opened')) {
			closePopup(popup)
		}
		if (evt.target.classList.contains('popup__close')) {
			closePopup(popup)
		}
	})
})
setEventListeners(editProfileForm)
setEventListeners(addForm)
setEventListeners(editAvatarForm)
Promise.all([getUserInfo(), getImages()]).catch(err => console.log(err))
export { handleImageClick, imgPop, userId }
