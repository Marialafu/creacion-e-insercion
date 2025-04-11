const sayHelloButton = document.getElementById('say-hello-button');
const sayHelloMessage = document.getElementById('say-hello-message');
const sayHelloInput = document.getElementById('say-hello-input');

const rangeNumber = document.getElementById('range-number');
const rangeBar = document.getElementById('range-bar');
const rangeButton = document.getElementById('range-button');
const generateHeadingMessage = document.getElementById('generate-heading-message')

const findSuppliesButton = document.getElementById('find-supplies-button');
const supplyHistoryList = document.getElementById('supply-history')

const begoButton = document.getElementById('bego-button');
const trafficZone = document.getElementById('traffic-zone');
const trafficZoneMessage = document.getElementById('traffic-zone-message')


const supplies = [
  'a medkit',
  'a flashlight with half battery',
  'some canned food',
  'a rusty knife',
  'a bottle of clean water',
  'a pack of bullets',
  'a piece of cloth (could be used as a bandage)',
  'a lighter',
  'an empty bottle (might be useful)',
  'some herbs (smell weird)',
  'a broken walkie-talkie',
  'a protein bar, still edible',
  'a map with strange markings'
];

const failureTexts = [
  'Nothing but silence and dust. Abby returned empty-handed.',
  'No supplies today. The world remains unforgiving.',
  "She searched everywhere, but luck wasn't on her side."
];

let daysCounter = 0

rangeNumber.textContent = rangeBar.value

const sendSayHelloMessage = () => {
  const h2Message = document.createElement('h2');
  h2Message.textContent = `Hello, ${sayHelloInput.value}`;
  if (sayHelloInput.value.length >= 3) {
    sayHelloMessage.append(h2Message);
  }
};


const putRangeNumber = () => {
  rangeNumber.textContent = rangeBar.value
}

const generateHeading = () => {
  const headerText = document.createElement(`h${rangeBar.value}`)
  headerText.textContent = `I am an h${rangeBar.value}`
  generateHeadingMessage.prepend(headerText)
}

const generateSupplySearchList = () => {
  daysCounter++

  const foundOrNotFound = Math.round(Math.random())
  const aleatorySupply = Math.floor(Math.random()*supplies.length)
  const aleatoryFailure = Math.floor(Math.random()*failureTexts.length)

  const liElement = document.createElement('li')
  if (foundOrNotFound === 0){
    liElement.textContent = `Day ${daysCounter} - ${failureTexts[aleatoryFailure]}`
  } else {
    liElement.textContent = `Day ${daysCounter} - Abby searched and found ${supplies[aleatorySupply]}`
  }
  supplyHistoryList.append(liElement)
}



// Un botón con el texto "Watch out, Bego!".

// Un div con id "traffic-zone" que mostrará una secuencia de emojis de coches (🚗, 🚕, 🚙) cada vez que se pulsa el botón:

// Se añade un coche aleatorio al div.

// Se guarda un histórico de los últimos 3 coches.

// Si los 3 últimos coches son iguales, se muestra un <p> en el DOM con el texto:

// "Bego, please be careful! This car model 🚗 is stalking you! 🚨" (La imagen del coche será el que se repite 3 veces)

const cars = ['🚗', '🚕', '🚙'];


const generateBegoGame = () => {
  
  const aleatoryCar = Math.floor(Math.random()*cars.length)
  const carElement = document.createElement('span')

  carElement.textContent = cars[aleatoryCar]
  if (cars.length === 2){
    const carefulMessage = document.createElement('p')
    carefulMessage.classList.add('color')
    carefulMessage.textContent = `Bego, please be careful! This car model ${cars[aleatoryCar]} is stalking you! 🚨`
    trafficZoneMessage.append(carefulMessage)
  } else {
    carefulMessage.textContent = ''
  }
  //poner y quitar el coche
  trafficZone.append(carElement)
}

begoButton.addEventListener('click', generateBegoGame)
findSuppliesButton.addEventListener('click', generateSupplySearchList)
rangeButton.addEventListener('click', generateHeading)
rangeBar.addEventListener('input', putRangeNumber)
sayHelloButton.addEventListener('click', sendSayHelloMessage);



