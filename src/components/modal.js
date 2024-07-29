import {
	editPop,
	imgPop,
	jobInput,
	nameInput,
	profileDescription,
	profileTitle,
} from '../scripts/index.js'
function openPopup(pop, link = null, name = null) {
	pop.classList.add('popup_is-animated')
	setTimeout(() => {
		pop.classList.toggle('popup_is-opened')
		const escapeListener = evt => {
			if (evt.key === 'Escape') {
				pop.classList.remove('popup_is-opened')
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
	})
}
export { openPopup }
