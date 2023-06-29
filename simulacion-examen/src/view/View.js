import { Select } from './Select.js'
import { Table } from './Table.js'
class View extends HTMLDivElement {
  constructor () {
    super()
    this.table = new Table()
    this.labelType = document.createElement('label')
    this.labelPrior = document.createElement('label')
    this.labelType.innerHTML = 'Tipo'
    this.labelPrior.innerHTML = 'Prioridad'
    this.textArea = document.createElement('textarea')
    this.buttonConfirm = document.createElement('button')
    this.buttonConfirm.innerHTML = 'Crear'
    this.typeInput = new Select('typeInput', ['Fallas', 'Nuevo requerimiento'])
    this.priorityInput = new Select('priorInput', ['baja', 'media', 'alta'])
    this.appendChild(this.labelType)
    this.appendChild(this.typeInput)
    this.appendChild(this.labelPrior)
    this.appendChild(this.priorityInput)
    this.appendChild(this.textArea)
    this.appendChild(this.buttonConfirm)
    this.appendChild(this.table)
    this.style.display = 'flex'
    this.style.flexDirection = 'column'
  }
  update (data) {
    this.table.addRow(data)
  }
}
customElements.define('defaul-view', View, {
  extends: 'div'
})

export { View }
