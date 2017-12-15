import React from 'react'

import Logo from '../../componment/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace,Button, Radio} from 'antd-mobile'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'genuis'
    }
  }
  render () {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
        <h2>注册页</h2>
        <List>
          <InputItem>用户名</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem>密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem>确认密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <RadioItem checked = {this.state.type == 'genuis'}>牛人</RadioItem>
          <RadioItem checked = {this.state.type == 'consignor'}>委托人</RadioItem>
          <WhiteSpace></WhiteSpace>
          <Button type='primary'>注册-></Button>
        </List>
      </div>
    )
  }
}

export default Register