const imgPop = document.querySelector('.popup_type_image')

function openPopup(pop) {
	pop.classList.add('popup_is-animated')
	setTimeout(() => {
		pop.classList.add('popup_is-opened')
	})

	document.addEventListener('keydown', handleEscape)
}
function handleEscape(evt) {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_is-opened')
		closePopup(openedPopup)
	}
}

function closePopup(pop) {
	pop.classList.remove('popup_is-opened')
	document.removeEventListener('keydown', handleEscape)
}

export { closePopup, handleEscape, imgPop, openPopup }
