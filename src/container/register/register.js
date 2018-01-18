import React from 'react'

import Logo from '../../componment/logo/logo'
import {List, InputItem, WhiteSpace,Button, Radio} from 'antd-mobile'
import {connect} from 'react-redux'
import {register}  from '../../redux/user.redux'
import { Redirect } from 'react-router-dom';
import hocForm from '../../componment/hoc-form/hoc-form'

@connect(
  state => state.user,
  {register}
)
@hocForm
class Register extends React.Component {

  componentDidMount () {
    this.props.handleChange('type', 'genius')
  }

  handleRegister () {
    this.props.register(this.props.state)
    console.log(this.props.state)
  }

  render () {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo></Logo>
        <h2>注册页</h2>
        <List>
          {this.props.msg ? <p className='error-msg' >{this.props.msg}</p> : null}
          <InputItem
            onChange={(v) => {
              this.props.handleChange('user', v)
            }}
          >用户名</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem
            type='password'
            onChange={(v) => {
              this.props.handleChange('psd', v)
            }}
          >密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem
            type='password'
            onChange={(v) => {
              this.props.handleChange('repeatpsd', v)
            }}
          >确认密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <RadioItem
            checked = {this.props.state.type == 'genius'}
            onChange={() => this.props.handleChange('type', 'genius')}
          >牛人</RadioItem>
          <RadioItem
            checked = {this.props.state.type == 'consignor'}
            onChange={() => this.props.handleChange('type', 'consignor')}
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