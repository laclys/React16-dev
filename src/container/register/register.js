import React from 'react'

import Logo from '../../componment/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace,Button, Radio} from 'antd-mobile'
import {connect} from 'react-redux'
import {register}  from '../../redux/user.redux'


@connect(
  state => state.user,
  {register}
)
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      psd: '',
      repeatpsd: '',
      type: 'genuis'
    }
  }

  handleChange (key, val) {
    this.setState({
      [key]: val
    })
  }

  handleRegister () {
    this.props.register(this.state)
    console.log(this.state)
  }

  render () {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
        <h2>注册页</h2>
        <List>
          {this.props.msg ? <p className='error-msg' >{this.props.msg}</p> : null}
          <InputItem
            onChange={(v) => {
              this.handleChange('user', v)
            }}
          >用户名</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem
            type='password'
            onChange={(v) => {
              this.handleChange('psd', v)
            }}
          >密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem
            type='password'
            onChange={(v) => {
              this.handleChange('repeatpsd', v)
            }}
          >确认密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <RadioItem
            checked = {this.state.type == 'genuis'}
            onChange={() => this.handleChange('type', 'genuis')}
          >牛人</RadioItem>
          <RadioItem
            checked = {this.state.type == 'consignor'}
            onChange={() => this.handleChange('type', 'consignor')}
          >委托人</RadioItem>
          <WhiteSpace></WhiteSpace>
          <Button
            type='primary'
            onClick={() =>this.handleRegister()}
          >注册-></Button>
        </List>
      </div>
    )
  }
}

export default Register