function showInputError(formElement, inputElement, errorMessage) {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
	errorElement.textContent = errorMessage
	errorElement.classList.add('popup__error_visible')
	inputElement.classList.add('popup__input_type_error')
}

function hideInputError(formElement, inputElement) {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
	errorElement.textContent = ''
	errorElement.classList.remove('popup__error_visible')
	inputElement.classList.remove('popup__input_type_error')
}

function checkInputValidity(formElement, inputElement) {
	let regx = /^[a-zа-яё\-\s]+$/gi
	if (inputElement.type === 'url') {
		regx =
			/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/gi
	}
	if (!regx.test(inputElement.value)) {
		showInputError(formElement, inputElement, inputElement.dataset.errorMessage)
	} else if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage)
	} else {
		hideInputError(formElement, inputElement)
	}
}
function hasInvalidInput(inputList) {
	return inputList.some(inputItem => {
		return (
			!inputItem.validity.valid ||
			inputItem.classList.contains('popup__input_type_error')
		)
	})
}
function toggleButtonState(inputList, buttonElement) {
	if (hasInvalidInput(inputList)) {
		buttonElement.disabled = true
		buttonElement.classList.add('button_inactive')
	} else {
		buttonElement.disabled = false
		buttonElement.classList.remove('button_inactive')
	}
}
function setEventListeners(formElement) {
	const inputList = Array.from(formElement.querySelectorAll('.popup__input'))
	const buttonElement = formElement.querySelector('.popup__button')
	toggleButtonState(inputList, buttonElement)

	inputList.forEach(inputElement => {
		inputElement.addEventListener('input', () => {
			checkInputValidity(formElement, inputElement)
			toggleButtonState(inputList, buttonElement)
		})
	})
}
function removeErrors(formElement) {
	const inputList = Array.from(formElement.querySelectorAll('.popup__input'))

	inputList.forEach(inputElement => {
		hideInputError(formElement, inputElement)
	})
	const buttonElement = formElement.querySelector('.popup__button')
	buttonElement.disabled = false
}
export { removeErrors, setEventListeners }
