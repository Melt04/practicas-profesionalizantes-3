class Controller {
  constructor (view, model) {
    this.view = view
    this.model = model
    this.addEventListeners()
  }

  addEventListeners () {
    for (let i = 0; i < this.view.buttonArray.length; i++) {
      console.log(i)
      this.view.buttonArray[i].addEventListener('click', () => {
        const text = this.view.buttonArray[i].innerText
        switch (text) {
          case 'C':
            this.clearOnClick()
            break
          case '=':
            this.calculate()
            break
          default:
            this.onButtonClick(text)
        }
      })
    }
  }
  onButtonClick (value) {
    this.view.input.value += value
  }
  clearOnClick () {
    this.view.input.value = ''
  }
  calculate () {
    const result = this.model.calculate(this.view.input.value)
    this.view.input.value = result
  }
}

const view = new View()
const model = new Model()
const controller = new Controller(view, model)
