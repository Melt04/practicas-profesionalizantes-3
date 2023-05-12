function addValue() {
  if (this.innerText) {
    if (this.innerText === '=') {
      calculate()

    } else {

      document.getElementById('result').value += this.innerText
    }
  }
  else {
    console.error(`Error  in inner text ${this}`)
  }
}

function clearDisplay() {
  document.getElementById('result').value = ''
}

function calculate() {
  const value = document.getElementById('result').value
  const result = eval(value)
  document.getElementById('result').value = result
}

function onApplicationBoostrap() {
  const buttonArray = []
  const divCalculator = document.createElement('div')
  const divDisplay = document.createElement('div')
  const divKeys = document.createElement('div')
  divCalculator.classList.add('calculator')
  divDisplay.classList.add('display')
  divKeys.classList.add('keys')
  const body = document.querySelector('body')
  const input = document.createElement('input')
  input.id = 'result'

  for (let i = 0; i < 10; i++) {
    buttonArray.push(createButton(i))
  }
  buttonArray.push(createButton("+"))
  buttonArray.push(createButton("-"))
  buttonArray.push(createButton("="))
  body.appendChild(divCalculator)
  divCalculator.appendChild(divDisplay)
  divCalculator.appendChild(divKeys)
  divDisplay.appendChild(input)

  buttonArray.forEach(button => {
    divKeys.appendChild(button)

  })
}

function createButton(id) {
  const button = document.createElement('button')
  button.innerText = id
  button.addEventListener('click', addValue)
  return button
}

function calculate() {
  const value = document.getElementById('result').value
  const result = eval(value)
  document.getElementById('result').value = result
}
window.addEventListener('load', onApplicationBoostrap)