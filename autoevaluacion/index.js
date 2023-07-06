const MAX = 255
const INITIAL_COLOR_RED = 255
const INITIAL_COLOR_GREEN = 0
const INITIAL_COLOR_BLUE = 0
const INCREMENT = 2
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
class ButtonStateModelDoubleIncrement {
  constructor () {
    this.max = MAX
    this.value = 0
  }
  increment () {
    if (!this.isValueMax()) {
      this.value = this.value + INCREMENT
      const event = new CustomEvent(
        'modelClick',
        { detail: { data: INCREMENT } },
        {
          bubbles: true,
          cancelable: true
        }
      )
      document.dispatchEvent(event)
    }
  }
  read () {
    return this.value
  }
  isValueMax () {
    return this.read() + 2 >= this.max
  }
}

class ButtonStateController {
  constructor (model, view) {
    this.innerModel = model
    this.innerView = view
  }

  init () {
    this.innerView.setValue(this.innerModel.read())
    console.log(this.innerModel)
    document.addEventListener('modelClick', e => {
      const event = new CustomEvent(
        'updateColor',
        {
          detail: {
            data: e.detail.data
          }
        },
        {
          bubbles: true,
          cancelable: true
        }
      )
      document.dispatchEvent(event)
    })
  }

  onclick () {
    this.innerModel.increment()
    this.innerView.setValue(this.innerModel.read())
  }
}

class ButtonStateView extends HTMLElement {
  constructor (model) {
    super()
    this.innerModel = new model()
    this.innerController = new ButtonStateController(this.innerModel, this)
    this.customButton = document.createElement('button')
    this.appendChild(this.customButton)
    this.red = INITIAL_COLOR_RED
    this.blue = INITIAL_COLOR_BLUE
    this.green = INITIAL_COLOR_GREEN
    this.updateColor(this.red, this.green, this.blue)
    document.addEventListener('updateColor', e => {
      const newValue = this.getColorRed() - e.detail.data
      this.setColorRed(newValue)
      this.updateColor(this.red, this.green, this.blue)
    })
  }

  connectedCallback () {
    this.customButton.onclick = () => this.innerController.onclick()
    this.innerController.init()
  }

  setValue (value) {
    this.customButton.innerText = value.toString()
  }
  setColorRed (value) {
    this.red = value
  }
  getColorRed () {
    return this.red
  }
  updateColor (red, green, blue) {
    this.customButton.style.color = `rgb(${red},${green},${blue})`
  }
}
customElements.define('x-button', ButtonStateView)

function main () {
  let testButton = new ButtonStateView(ButtonStateModelDoubleIncrement)
  document.body.appendChild(testButton)
}

main()
