import React from 'react'
import {Redirect} from 'react-router-dom'

import Logo from '../../componment/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'


@connect(
  state => state.user,
  {login}
)
class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: '',
      psd: ''
    }
  }

  handleChange (key, val) {
    this.setState({
      [key]: val
    })
  }

  handleLogin () {
    this.props.login(this.state)
  }

  register () {
    this.props.history.push('/register')
  }

  render () {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo></Logo>
        <WingBlank>
          <List>
            {this.props.msg ? <p className='error-msg' >{this.props.msg}</p> : null}
            <InputItem
              onChange={(v) => {
                this.handleChange('user', v)
              }}
            >
            用户</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem
              type='password'
              onChange={(v) => {
                this.handleChange('psd', v)
              }}
            >密码</InputItem>
          </List>
          <Button
            type='primary'
            onClick={() => this.handleLogin()}
          >登录</Button>
          <WhiteSpace></WhiteSpace>
          <Button
            onClick={() => this.register()}
            type='primary'
          >注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login