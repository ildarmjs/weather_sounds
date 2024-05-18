import pictures from './images'
import sounds from './sounds'
import { activeSound } from './sounds'

const body = document.querySelector('body')

const setSoundsOff = () => {
	if (activeSound.sound) {
		const cardIcons = document.querySelectorAll('.card-icon')
		cardIcons.forEach((icon) => {
			icon.classList.remove('active-card')
		})
		sounds[activeSound.sound].pause()
	}
}

const cardHandler = (cardName: string) => {
	const cardIcon = document.getElementById(`${cardName}Icon`)
	const volumeSlider = document.getElementById(
		'volume-slider'
	) as HTMLInputElement
	sounds[cardName].volume = +volumeSlider.value

	setSoundsOff()

	if (activeSound.sound !== cardName) {
		sounds[cardName].play()
		activeSound.sound = cardName
		cardIcon?.classList.add('active-card')
	} else if (activeSound.sound === cardName) {
		activeSound.sound = ''
	} else {
		sounds[cardName].play();
		activeSound.sound = cardName;
		cardIcon?.classList.add('active-card');
	}
	body!.style.backgroundImage = `url(${pictures[cardName]})`
	body!.style.backdropFilter = 'blur(10px)'
	body!.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
	body!.style.width = '100%'
	body!.style.height = '100vh'

};

export default cardHandler
