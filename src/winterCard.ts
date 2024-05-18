import cardHandler from './cardHandler'

const winterCard = (parentElement: HTMLElement) => {
	const cardWinter = document.createElement('div')
	cardWinter.classList.add('card')
	cardWinter.id = 'card-winter'
	cardWinter.addEventListener('click', () => {
		cardHandler('winter')
	})
	const winterIconContainer = document.createElement('div')
	winterIconContainer.classList.add('card-icon')
	winterIconContainer.id = 'winterIcon'
	cardWinter.appendChild(winterIconContainer)
	parentElement.appendChild(cardWinter)
}

export default winterCard;
