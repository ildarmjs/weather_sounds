import cardHandler from './cardHandler'

const summerCard = (parentElement: HTMLElement) => {
	const cardSummer = document.createElement('div')

	cardSummer.classList.add('card')
	cardSummer.id = 'card-summer'
	cardSummer.addEventListener('click', () => {
		cardHandler('summer')
	})
	const summerIconContainer = document.createElement('div')
	summerIconContainer.classList.add('card-icon')
	summerIconContainer.id = 'summerIcon'
	cardSummer.appendChild(summerIconContainer)
	parentElement.appendChild(cardSummer)
}

export default summerCard
