import sounds from './sounds'
import { activeSound } from './sounds'

const sliderVol = (parentElement: HTMLElement) => {
	const volumeSlider = document.createElement('input')!
	volumeSlider.type = 'range'
	volumeSlider.id = 'volume-slider'
	volumeSlider.min = '0'
	volumeSlider.max = '1'
	volumeSlider.step = '0.01'
	volumeSlider.value = '0.5'
	volumeSlider.addEventListener('input', () => {
		if (sounds[activeSound.sound]) {
			sounds[activeSound.sound].volume = +volumeSlider.value
		}
	})
	parentElement.appendChild(volumeSlider)
}

export default sliderVol