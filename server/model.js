/**
 * mongoose工具函数库
 */

const mongoose = require('mongoose')
// 链接mongo 并且使用new这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/lac-chat'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function () {
  console.log('mongo connect success')
})

const models= {
  user: {
    'user': {
      type: String,
      require: true
    },
    'psd': {
      type: String,
      require: true
    },
    'type': {
      type: String,
      require: true
    },
    'avatar': {
      type: String
    },
    'desc': {
      type: String
    },
    'title': {
      type: String
    },
    'title': {
      type: String
    },
    'title': {
      type: String
    },
    'company': {
      type: String
    },
    'money': {
      type: String
    },
  },
  chat: {
    'chatid': {
      type: String,
      require: true,
    },
    'from': {
      type: String,
      require: true
    },
    'to': {
      type: String,
      require: true
    },
    'read': {
      type: Boolean,
      default: false
    },
    'content': {
      type: String,
      require: true,
      default: ''
    },
    create_time: {
      type: Number,
      default: new Date().getTime()
    }
  }
}

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function (params) {
    return mongoose.model(params)
  }
}