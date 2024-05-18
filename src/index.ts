import rainCard from './rainCard'
import sliderVol from './sliderVol'
import summerCard from './summerCard'
import winterCard from './winterCard'
import './index.scss'

const app = document.getElementById('app')

const header = document.createElement('h1')
header.textContent = 'Weather sounds'
app.appendChild(header)

const cardsContainer = document.createElement('div')
cardsContainer.classList.add('cards')
app.appendChild(cardsContainer)

sliderVol(app)
summerCard(cardsContainer)
rainCard(cardsContainer)
winterCard(cardsContainer)


export default app