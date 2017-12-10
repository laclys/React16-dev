const express = require('express')

const mongoose = require('mongoose')
// 链接mongo 并且使用new这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/new'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function () {
  console.log('mongo connect success')
})
// 类似mysql的表 mongo里有文档·字段的概念~
const User = mongoose.model('user', new mongoose.Schema({
  name: {type: String, require: true},
  age: {type: Number, require: true},
}))

// 新增数据
// User.create({
//   name: 'lac',
//   age: 20
// }, function (err, doc) {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })
// 删除数据
// User.remove({age: 20}, function (err, doc) {
//   if (!err) {
//     console.log(doc)
//   }
// })
// 更新
User.update({'name': 'lac'},{'$set': {age: 26}},function (err, doc) {
  console.log(doc)
})

//新建app
const app = express()

app.get('/',function (req, res) {
  res.send('<h1>Hello world</h1>')
})
app.get('/data',function (req, res) {
  // res.json({name: 'lacly', type: 'otaku'})
  User.find({name: 'lac'},function (err, doc) {
    res.json(doc)
  })
})

app.listen(9098, function () {
  console.log('Node app start at 9098')
})