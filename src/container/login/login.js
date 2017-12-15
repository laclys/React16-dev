import React from 'react'

import Logo from '../../componment/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace,Button} from 'antd-mobile'

class Login extends React.Component {

  constructor(props) {
    super(props)
  }

  register () {
    // console.log(this.props)
    this.props.history.push('/register')
  }

  render () {
    return (
      <div>
        <Logo></Logo>
        <h2>我是登录页面</h2>
        <WingBlank>
          <List>
            <InputItem>用户</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem>密码</InputItem>
          </List>
          <Button type='primary'>登录</Button>
          <WhiteSpace></WhiteSpace>
          <Button onClick={() => this.register()} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login