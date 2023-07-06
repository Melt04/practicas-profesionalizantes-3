class Controller {
  constructor (Model, View) {
    this.model = Model
    this.view = View
    this.view.buttonConfirm.addEventListener('click', e => this.addTicket(e))
    this.model.addEventListener('updateList', this.handleModelChange.bind(this))
  }

  addTicket (e) {
    e.preventDefault()
    const response = confirm('Estas seguro que deseas crear el ticket')
    if (response) {
      this.model.addTicket(
        this.view.typeInput.value,
        this.view.priorityInput.value,
        this.view.textArea.value
      )
    }
  }
  handleModelChange (event) {
    const eventData = event.detail
    this.view.update(eventData)
  }
}

export { Controller }
