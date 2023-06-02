const http = require('http')
const Routes = require('./controllers/index')

const route = new Routes()

const server = http.createServer((req, res) => {
  let body = ''
  if (!route.validateRoute(req.url)) {
    res.writeHead(404, 'error', {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
    res.write('ERROR')
    return res.end()
  }
  res.writeHead(200, 'ok', {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  req.on('data', data => {
    body += data
  })
  req.on('end', data => {
    try {
      const response = eval(JSON.parse(body))
      console.log(response)
      res.write(response.toString())
      res.end()
    } catch (e) {
      console.log(e)
      res.write('null')
      res.end()
    }
  })
})

const port = 3000

server.listen(port, () => {
  console.log('Server running in  3000')
})
