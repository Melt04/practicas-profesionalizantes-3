class Table extends HTMLElement {
  constructor (headers) {
    super()
    this.table = document.createElement('table')
    const thead = document.createElement('thead')
    const headerRow = document.createElement('tr')
    headerRow.innerHTML = headers
    thead.appendChild(headerRow)
    this.table.appendChild(thead)
    this.appendChild(this.table)
  }

  clearRows () {
    const table = document.getElementsByTagName('table')[0]
    const index = table.childElementCount - 1
    for (let i = index; i > 0; i--) {
      table.childNodes[i].remove()
    }
  }
  updateDelete (data) {
    this.clearRows()
    console.log(data)
  }

  addRow (data) {
    const { id, name, lastName, tel, type } = data
    const newRow = document.createElement('tr')
    const nameCell = document.createElement('td')
    nameCell.textContent = name
    const idCell = document.createElement('td')
    idCell.textContent = id
    const lastNameCell = document.createElement('td')
    lastNameCell.textContent = lastName
    const telCell = document.createElement('td')
    telCell.textContent = tel
    const typeCell = document.createElement('td')
    let color
    switch (type) {
      case 'Familia':
        color = 'red'
        break
      case 'Trabajo':
        color = 'green'
        break
      case 'Servicio':
        color = 'yellow'
        break
      case 'Favoritos':
        color = 'gray'
        break
      case 'Estudio':
        color = 'blue'
        break
      case 'Amigos':
        color = 'orange'
        break
    }
    newRow.style.background = color
    typeCell.textContent = type
    newRow.appendChild(idCell)

    newRow.appendChild(nameCell)
    newRow.appendChild(lastNameCell)
    newRow.appendChild(telCell)
    newRow.appendChild(typeCell)

    this.table.appendChild(newRow)
  }
}

customElements.define('custom-table', Table)
export { Table }
