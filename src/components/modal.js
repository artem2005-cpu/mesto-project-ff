import { editPop, imgPop } from './card.js'
import {
	jobInput,
	nameInput,
	profileDescription,
	profileTitle,
} from './forms.js'
const newPop = document.querySelector('.popup_type_new-card')

function openPopup(pop, link = null, name = null) {
	pop.classList.add('popup_is-animated')
	setTimeout(() => {
		pop.classList.add('popup_is-opened')
		const escapeListener = evt => {
			if (evt.key === 'Escape') {
				closePopup(pop)
				document.removeEventListener('keydown', escapeListener)
			}
		}
		if (pop === editPop) {
			nameInput.value = profileTitle.textContent
			jobInput.value = profileDescription.textContent
		}
		if (pop === imgPop) {
			pop.querySelector('.popup__image').src = link
			pop.querySelector('.popup__caption').textContent = name
		}
		document.addEventListener('keydown', escapeListener)
		pop.addEventListener('click', evt => {
			if (evt.target.classList.contains('popup')) {
				pop.classList.remove('popup_is-opened')
			}
		})
		const closePop = pop.querySelector('.popup__close')
		closePop.addEventListener('click', () => {
			closePopup(pop)
		})
	})
}
function closePopup(pop) {
	pop.classList.remove('popup_is-opened')
}
export { closePopup, newPop, openPopup }
