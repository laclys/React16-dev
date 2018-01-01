const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

// work with express
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', function(socket) {
  // console.log('user login')
  socket.on('sendmsg', function(data) {  // socket的当前连接的请求，io是全局的
    console.log(data)
    io.emit('recvmsg',data)
  })
})

const userRouter = require('./user')


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

server.listen(9098, function () {
  console.log('Node app start at 9098')
})