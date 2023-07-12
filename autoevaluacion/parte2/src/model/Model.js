const CONTACTS = 'contacts'
class Model extends EventTarget {
  constructor () {
    super()
    window.addEventListener('load', () => this.loadTable())
  }
  addContact (name, lastName, tel, type) {
    let savedContacts = JSON.parse(localStorage.getItem(CONTACTS))
    if (!savedContacts) {
      savedContacts = []
    }
    let index = savedContacts.length
    let id = index + 1
    savedContacts.push({ id, name, lastName, tel, type })
    localStorage.setItem(CONTACTS, JSON.stringify(savedContacts))
    this.dispatchEvent(
      new CustomEvent('updateList', {
        detail: { id, name, lastName, tel, type }
      })
    )
  }
  deleteContact (idDelete) {
    let savedContacts = JSON.parse(localStorage.getItem(CONTACTS))
    let foundConctact = savedContacts.filter(contact => contact.id != idDelete)
    localStorage.setItem(CONTACTS, JSON.stringify(foundConctact))
    const allContacts = JSON.parse(localStorage.getItem(CONTACTS)) || []
    this.dispatchEvent(new CustomEvent('clearTable'))
    allContacts.forEach(({ id, name, lastName, tel, type }) => {
      this.dispatchEvent(
        new CustomEvent('updateList', {
          detail: { id, name, lastName, tel, type }
        })
      )
    })
  }
  searchContact (id) {
    let savedContacts = JSON.parse(localStorage.getItem(CONTACTS))
    let foundConctact = savedContacts.find(contact => contact.id == id)
    if (foundConctact) {
      const { id, name, lastName, tel, type } = foundConctact
      this.dispatchEvent(
        new CustomEvent('updateListSearch', {
          detail: { id, name, lastName, tel, type }
        })
      )
    } else {
      alert('Contacto no encontrado')
    }
  }
  allContacts () {
    const allContacts = JSON.parse(localStorage.getItem(CONTACTS)) || []
    this.dispatchEvent(new CustomEvent('clearTable'))
    allContacts.forEach(({ id, name, lastName, tel, type }) => {
      this.dispatchEvent(
        new CustomEvent('updateList', {
          detail: { id, name, lastName, tel, type }
        })
      )
    })
  }

  loadTable () {
    {
      const allContacts = JSON.parse(localStorage.getItem(CONTACTS)) || []
      allContacts.forEach(({ id, name, lastName, tel, type }) => {
        this.dispatchEvent(
          new CustomEvent('updateList', {
            detail: { id, name, lastName, tel, type }
          })
        )
      })
    }
  }
}
export { Model }
