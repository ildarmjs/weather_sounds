import summer from '../public/sounds/summer.mp3'
import rain from '../public/sounds/rain.mp3'
import winter from '../public/sounds/winter.mp3'

interface Sounds {
	[key: string]: HTMLAudioElement
}

const sounds: Sounds = {
	summer: new Audio(summer),
	rain: new Audio(rain),
	winter: new Audio(winter),
};

const activeSound: { sound: string } = {
	sound: ''
}

export default sounds
export { activeSound }
