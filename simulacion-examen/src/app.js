import { View } from './view/View.js'
import { Model } from './model/Model.js'
import { Controller } from './controller/Controller.js'

class TicketStart extends HTMLFormElement {
  constructor (view, model, controller) {
    super()
    this.innerView = new view()
    this.appendChild(this.innerView)
    this.innerModel = new model()
    this.innerController = new controller(this.innerModel, this.innerView)
  }
}

customElements.define('ticket-start', TicketStart, { extends: 'form' })

const ticket = new TicketStart(View, Model, Controller)

document.body.appendChild(ticket)
