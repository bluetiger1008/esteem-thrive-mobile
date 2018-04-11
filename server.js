const express = require('express')
const history = require('connect-history-api-fallback')
const morgan = require('morgan')

const app = express()

app.use(history())
app.use(morgan('combined'))

app.use(express.static('build'))

app.listen(process.env.PORT || 5000)
