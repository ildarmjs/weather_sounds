import cardHandler from './cardHandler'

const rainCard = (parentElement: HTMLElement) => {
	const cardRain = document.createElement('div')
	cardRain.classList.add('card')
	cardRain.id = 'card-rain'
	cardRain.addEventListener('click', () => {
		cardHandler('rain')
	})
	const rainIconContainer = document.createElement('div')
	rainIconContainer.classList.add('card-icon')
	rainIconContainer.id = 'rainIcon'
	cardRain.appendChild(rainIconContainer)
	parentElement.appendChild(cardRain)
}

export default rainCard
