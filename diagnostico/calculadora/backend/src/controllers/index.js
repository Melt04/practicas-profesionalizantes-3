class Routes {
  constructor () {
    this.routes = ['/']
  }
  validateRoute (route) {
    return this.routes.find(r => r == route)
  }
}
module.exports = Routes
