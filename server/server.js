const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')
const app = express()


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

app.listen(9098, function () {
  console.log('Node app start at 9098')
})