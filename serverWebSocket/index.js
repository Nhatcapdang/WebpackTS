const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8082 })
wss.on('connection', ws => {
  console.log('Client connected')

  ws.on('message', function incoming(message) {
    message = Buffer.from(message).toString('utf8')
    // console.log('Client send some', JSON.parse(message))
    console.log(message)
    ws.send(message)
  })

  ws.on('close', () => {
    console.log('Client disconnected')
  })
})
