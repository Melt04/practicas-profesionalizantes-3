class Controller {
  constructor (Model, View) {
    this.model = Model
    this.view = View
    this.view.buttonConfirm.addEventListener('click', e => this.addContact(e))
    this.view.buttonSearch.addEventListener('click', e => this.searchContact(e))
    this.view.buttonDelete.addEventListener('click', e => {
      this.deleteContact(e)
    })
    this.view.buttonUpdate.addEventListener('click', e => this.update(e))

    this.model.addEventListener('updateList', this.handleModelChange.bind(this))
    this.model.addEventListener(
      'updateListSearch',
      this.handleSearch.bind(this)
    )

    this.model.addEventListener('clearTable', this.handleClear.bind(this))
  }

  searchContact (e) {
    e.preventDefault()
    this.model.searchContact(this.view.inputSearch.value)
  }
  deleteContact (e) {
    e.preventDefault()
    this.model.deleteContact(this.view.inputBorrar.value)
  }
  addContact (e) {
    e.preventDefault()
    this.model.addContact(
      this.view.inputName.value,
      this.view.inputLastName.value,
      this.view.inputTel.value,
      this.view.inputTypeContact.value
    )
  }
  update (e) {
    e.preventDefault()
    this.model.updateTable()
  }
  handleModelChange (event) {
    const eventData = event.detail
    this.view.update(eventData)
  }
  handleSearch (event) {
    const eventData = event.detail
    this.view.updateSearch(eventData)
  }
  handleClear (event) {
    this.view.clearTable()
  }
}

export { Controller }
