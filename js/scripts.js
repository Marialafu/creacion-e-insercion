const sayHelloButton = document.getElementById('say-hello-button');
const sayHelloMessage = document.getElementById('say-hello-message');
const sayHelloInput = document.getElementById('say-hello-input');

const rangeNumber = document.getElementById('range-number');
const rangeBar = document.getElementById('range-bar');
const rangeButton = document.getElementById('range-button');

const findSuppliesButton = document.getElementById('find-supplies-button');

const begoButton = document.getElementById('bego-button');

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

const sendSayHelloMessage = () => {
  const h2Message = document.createElement('h2');
  h2Message.textContent = `Hello, ${sayHelloInput.value}`;
  if (sayHelloInput.value.length >= 3) {
    sayHelloMessage.append(h2Message);
  }
};

sayHelloButton.addEventListener('click', sendSayHelloMessage);

//Imagina que tienes un control deslizante que te permite elegir el nivel de poder de un encabezado del 1 al 6.
// Cuanto más alto el número… más pequeño el encabezado.
// Cuando hagas clic en el botón, se generará un encabezado con la etiqueta correspondiente (h1...h6) y el texto "I am an hX", donde X es el número elegido.

// Ejemplo: si eliges 2, se insertará un <h2> con el texto "I am an h2".

const sendRangeMessage = () => {
  const h2Message = document.createElement('h2');
  h2Message.textContent = `I am a h${sayHelloInput.value}`;
  if (sayHelloInput.value.length >= 3) {
    sayHelloMessage.append(h2Message);
  }
};

sayHelloButton.addEventListener('click', sendSayHelloMessage);
