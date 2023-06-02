const SYMBOLS = ['+', '-', '=', '.', '*', '/', 'C']
class View {
  constructor () {
    this.buttonArray = this.createNumericButton()
    this.buttonArray.push(...this.createSymbols())
    this.divCalculator = document.createElement('div')
    this.divDisplay = document.createElement('div')
    this.divKeys = document.createElement('div')
    this.divCalculator.classList.add('calculator')
    this.divDisplay.classList.add('display')
    this.divKeys.classList.add('keys')
    this.body = document.querySelector('body')
    this.input = document.createElement('input')
    this.input.id = 'result'
    this.body.appendChild(this.divCalculator)
    this.divCalculator.appendChild(this.divDisplay)
    this.divCalculator.appendChild(this.divKeys)
    this.divDisplay.appendChild(this.input)
    this.buttonArray.forEach(button => {
      this.divKeys.appendChild(button)
    })
  }

  createButton (text) {
    const button = document.createElement('button')
    button.innerText = text
    return button
  }
  createNumericButton () {
    const buttonCreated = []
    for (let i = 0; i < 10; i++) {
      buttonCreated.push(this.createButton(i))
    }
    return buttonCreated
  }
  createSymbols () {
    return SYMBOLS.map(sym => {
      return this.createButton(sym)
    })
  }
}
