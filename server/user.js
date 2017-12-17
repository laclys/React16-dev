const express = require('express')
const Router = express.Router()
const utils = require('utility')
const model = require('./model')
const User = model.getModel('user')


Router.get('/list',function (req, res) {
  User.find({}, function (err, doc) {
    return res.json(doc)
  })
})

Router.post('/register', function (req, res) {
  const {user, psd, type} =req.body
  User.findOne({user}, function (err, doc) {
    if (doc) {
      return res.json({code: 1,msg: '用户名重复'})
    }
    User.create({user, psd: md5Pwd(psd), type}, function (e, d) {
      if (e) {
        return res.json({code: 1, msg: '后端出错了'})
      }
      return res.json({code: 0})
    })
  })
})

Router.get('/info', function (req, res) {
  // 用户有没有cookie
  return res.json({
    code: 1
  })
})

function md5Pwd(psd) {
  const salt = 'lac_is_god421084802~~'
  return utils.md5(utils.md5(psd + salt))
}

module.exports = Router