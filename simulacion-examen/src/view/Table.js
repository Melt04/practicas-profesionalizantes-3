class Table extends HTMLElement {
  constructor () {
    super()
    this.table = document.createElement('table')
    const thead = document.createElement('thead')
    const headerRow = document.createElement('tr')
    headerRow.innerHTML = `
      <th>Tipo</th>
      <th>Descripción</th>
      <th>Prioridad</th>
    `
    thead.appendChild(headerRow)
    this.table.appendChild(thead)
    this.appendChild(this.table)
  }
  // Crear la estructura de la tabla
  addRow (data) {
    const { type, desc, prior } = data
    const newRow = document.createElement('tr')
    const typeCell = document.createElement('td')
    typeCell.textContent = type
    const descriptionCell = document.createElement('td')
    descriptionCell.textContent = desc
    const priorityCell = document.createElement('td')
    let color = prior === 'alta' ? 'red' : prior === 'baja' ? 'green' : 'yellow'
    priorityCell.style.backgroundColor = color
    priorityCell.textContent = prior
    newRow.appendChild(typeCell)
    newRow.appendChild(descriptionCell)
    newRow.appendChild(priorityCell)
    this.table.appendChild(newRow)
  }
}

// Registrar el componente de la tabla
customElements.define('custom-table', Table)
export { Table }
