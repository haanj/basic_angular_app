'use strict'

let express = require('express')
let app = express()

app.use('/index', express.static('public'))



app.listen('3000', () => {
  console.log('Listening at port 3000')
})
