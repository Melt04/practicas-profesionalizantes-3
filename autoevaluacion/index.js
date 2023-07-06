class ButtonStateModel {
  constructor () {
    this.value = 0
  }

  increment () {
    this.value = this.value + 1
  }

  read () {
    return this.value
  }
}

class ButtonStateController {
  constructor (model, view) {
    this.innerModel = model
    this.innerView = view
  }

  init () {
    this.innerView.setValue(this.innerModel.read())
  }

  onclick () {
    this.innerModel.increment()
    this.innerView.setValue(this.innerModel.read())
  }
}

class ButtonStateView extends HTMLElement {
  constructor () {
    super()

    this.innerModel = new ButtonStateModel()
    this.innerController = new ButtonStateController(this.innerModel, this)

    this.customButton = document.createElement('button')
    this.appendChild(this.customButton)
  }

  connectedCallback () {
    this.customButton.onclick = () => this.innerController.onclick()
    this.innerController.init()
  }

  setValue (value) {
    this.customButton.innerText = value.toString()
  }
}

customElements.define('x-button', ButtonStateView)

function main () {
  let testButton = new ButtonStateView()
  document.body.appendChild(testButton)
}

main()
