class Select extends HTMLSelectElement {
  constructor (id, options) {
    super(id)
    this.id = id
    options.forEach((op, _) => {
      let opt = document.createElement('option')
      opt.value = op
      opt.innerHTML = op
      this.add(opt)
    })
  }
}

customElements.define('defaul-input', Select, {
  extends: 'select'
})

export { Select }
