import { Select } from './Select.js'
import { Table } from './Table.js'
class View extends HTMLDivElement {
  constructor () {
    super()
    this.table = new Table(`
    <th>Id</th>

      <th>Nombre</th>
      <th>Apellido</th>
      <th>Telefono</th>
      <th>Tipo</th>
    `)
    this.inputName = document.createElement('input')
    this.labelName = document.createElement('label')
    this.labelName.innerHTML = 'Nombre'
    this.inputLastName = document.createElement('input')
    this.labelLastName = document.createElement('label')
    this.labelLastName.innerHTML = 'Apellido'
    this.inputTel = document.createElement('input')
    this.labelTel = document.createElement('label')
    this.labelTel.innerHTML = 'Telefono'
    this.labelType = document.createElement('label')
    this.labelPrior = document.createElement('label')
    this.labelType.innerHTML = 'Tipo'
    this.buttonConfirm = document.createElement('button')
    this.buttonConfirm.innerHTML = 'Crear'
    this.inputTypeContact = new Select('priorInput', [
      'Amigos',
      'Familia',
      'Estudio',
      'Trabajo',
      'Servicio',
      'Favoritos'
    ])
    this.labelSearch = document.createElement('label')
    this.labelSearch.innerHTML = 'Buscar'
    this.inputSearch = document.createElement('input')
    this.buttonSearch = document.createElement('button')
    this.buttonSearch.innerHTML = 'Buscar'

    this.labelBorrar = document.createElement('label')
    this.labelBorrar.innerHTML = 'Borrar'
    this.inputBorrar = document.createElement('input')

    this.buttonDelete = document.createElement('button')
    this.buttonDelete.innerHTML = 'Borrar'

    this.labelUpdate = document.createElement('label')
    this.labelUpdate.innerHTML = 'Todos los contactos'

    this.buttonUpdate = document.createElement('button')
    this.buttonUpdate.innerHTML = 'Todos los contactos'

    this.appendChild(this.labelName)
    this.appendChild(this.inputName)
    this.appendChild(this.labelLastName)
    this.appendChild(this.inputLastName)
    this.appendChild(this.labelTel)
    this.appendChild(this.inputTel)
    this.appendChild(this.labelType)
    this.appendChild(this.inputTypeContact)
    this.appendChild(this.buttonConfirm)
    this.appendChild(this.table)
    this.appendChild(this.labelSearch)
    this.appendChild(this.inputSearch)
    this.appendChild(this.buttonSearch)
    this.appendChild(this.labelBorrar)
    this.appendChild(this.inputBorrar)
    this.appendChild(this.buttonDelete)
    this.appendChild(this.labelUpdate)
    this.appendChild(this.buttonUpdate)

    this.style.display = 'flex'
    this.style.flexDirection = 'column'
  }
  update (data) {
    this.table.addRow(data)
  }
  updateSearch (data) {
    this.table.clearRows()
    this.table.addRow(data)
  }
  clearTable (data) {
    this.table.clearRows(data)
  }
}
customElements.define('defaul-view', View, {
  extends: 'div'
})

export { View }
