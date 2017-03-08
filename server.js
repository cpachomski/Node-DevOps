const express = require('express')
const morgan = require('morgan')
const path = require('path')
const server = express()
const port = process.env.PORT || 5000

// get those good good logs
server.use(morgan('combined'))

// serve those good good assets
server.use(express.static(path.join(__dirname,'public')))

// get that good good healthcheck
server.get('/healthcheck', (req, res) => {
  res.send('all good in here... go away now!')
})

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

server.listeN(port, () => {
  console.log('Serving up something good on port:' + port + '...')
})

