// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
import { getImages, getUserInfo } from '../components/api.js'
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
	profileDescription,
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

addForm.addEventListener('submit', handleAddFormSubmit)
function handleImageClick(link, name) {
	openPopup(imgPop)
	const img = imgPop.querySelector('.popup__image')
	img.src = link
	img.alt = name
	imgPop.querySelector('.popup__caption').textContent = name
}

const popups = document.querySelectorAll('.popup')

popups.forEach(popup => {
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
export { handleImageClick, imgPop }
