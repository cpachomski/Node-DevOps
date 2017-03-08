const express = require('express')
const morgan = require('morgan')
const path = require('path')
const isPrime = require('./isPrime')
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

server.get('/is-prime/:number', (req, res) => {
  const number = req.params.number
  const isOrIsNot = isPrime(number) ? ' is ' : ' is not'
  res.send(number + isOrIsNot + ' a prime number.')
})

server.listen(port, () => {
  console.log('Serving up something good on port:' + port + '...')
})

