const express = require('express')
const {db} = require('./src/config/db')
const student = require("./src/route/index")
const app = express()
app.use(express.json())
db()
app.use('/', student)
app.listen(9000, () => {
  console.log('server is listening in port 9000')
})
