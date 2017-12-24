const express = require('express')
const Router = express.Router()
const utils = require('utility')
const model = require('./model')
const User = model.getModel('user')

const _filter = {
  'psd': 0,
  '__v': 0
}

// 用户列表页
Router.get('/list',function (req, res) {
  const {type} = req.query
  // User.remove({},function (e, d) {})
  User.find({type}, function (err, doc) {
    return res.json({code: 0,data: doc})
  })
})

// 登录
Router.post('/login', function (req, res) {
  const {user, psd} =req.body
  User.findOne({user, psd: md5Pwd(psd)}, _filter, function (err, doc) {
    if (!doc) {
      return res.json({
        code: 1,
        msg: '用户名或者密码错误'
      })
    }
    res.cookie('userid',doc._id)
    return res.json({
      code: 0,
      data: doc
    })
  })
})

// 注册
Router.post('/register', function (req, res) {
  const {user, psd, type} =req.body
  User.findOne({user}, function (err, doc) {
    if (doc) {
      return res.json({code: 1,msg: '用户名重复'})
    }
    const userModel = new User({user, psd: md5Pwd(psd), type})
    userModel.save(function (e, d) {
      if (e) {
        return res.json({code: 1, msg: '后端出错了'})
      }
      const {user, type, _id} = d
      res.cookie('userid', _id)
      return res.json({
        code: 0,
        data: {user, type, _id}
      })
    })
  })
})

Router.post('/update', function (req, res) {
  const {userid} = req.cookies
  if (!userid) {
    return json.dumps({code: 1})
  }
  const body = req.body
  User.findByIdAndUpdate(userid, body, function(err, doc){
    const data = Object.assign({},{
      user: doc.user,
      type: doc.type
    }, body)
    return res.json({code: 0, data})
  })
})

// 用户有没有登录信息
Router.get('/info', function (req, res) {
  const {userid} = req.cookies
  // 用户有没有cookie
  if (!userid) {
    return res.json({
      code: 1
    })
  }
  User.findOne({_id: userid}, _filter, function (err, doc) {
    console.log(err)
    if (err) {
      return res.json({
        code:1,
        msg: '后端出错'
      })
    }
    if (doc) {
      return res.json({
        code: 0,
        data: doc
      })
    }
  })
})

/**
 * 密码进行md5加密
 */
function md5Pwd(psd) {
  const salt = 'lac_is_god421084802~~'
  return utils.md5(utils.md5(psd + salt))
}

module.exports = Router