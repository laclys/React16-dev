const mongoose = require('mongoose')
// 链接mongo 并且使用new这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/new'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function () {
  console.log('mongo connect success')
})