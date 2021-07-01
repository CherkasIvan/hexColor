const btn = document.getElementById('btn')
const textColor = document.querySelector('.color')

const hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f']

btn.addEventListener('click', () => {
  let hexColor = generateHex()
  document.body.style.backgroundColor = hexColor
  textColor.textContent = hexColor
})

function generateHex() {
  let hexColor = '#'
  for(let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()]
  }
  return hexColor
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length)
}
