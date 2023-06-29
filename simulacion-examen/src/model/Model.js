const TK = 'ticket'
class Model extends EventTarget {
  constructor () {
    super()
    this.loadTable()
  }
  addTicket (type, prior, desc) {
    let savedTicket = JSON.parse(localStorage.getItem(TK))
    if (!savedTicket) {
      savedTicket = []
    }
    savedTicket.push({ type, prior, desc })
    localStorage.setItem(TK, JSON.stringify(savedTicket))
    this.dispatchEvent(
      new CustomEvent('updateList', {
        detail: { type, prior, desc }
      })
    )
  }
  loadTable () {
    window.addEventListener('load', () => {
      const allTickets = JSON.parse(localStorage.getItem(TK))
      allTickets.forEach(({ type, prior, desc }) => {
        this.dispatchEvent(
          new CustomEvent('updateList', {
            detail: { type, prior, desc }
          })
        )
      })
    })
  }
}
export { Model }
