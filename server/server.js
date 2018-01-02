const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const model = require('./model')
const User = model.getModel('user')
const Chat = model.getModel('chat')

// work with express
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', function(socket) {
  // console.log('user login')
  socket.on('sendmsg', function(data) {  // socket的当前连接的请求，io是全局的
    console.log(data)
    const {from, to, msg} = data
    const chatid = [from, to].sort().join('-')
    Chat.create({chatid, from, to, content:msg},function(err, doc){
      io.emit('recvmsg',Object.assign({},doc._doc))
    })
    // console.log(data)
    // io.emit('recvmsg',data)
  })
})

const userRouter = require('./user')


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

server.listen(9098, function () {
  console.log('Node app start at 9098')
})