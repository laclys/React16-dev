import React from 'react'
import {connect} from 'react-redux'
import {login} from './Auth.redux'
import {Redirect} from 'react-router-dom'

@connect(
  state=>state.auth,
  {login}
)
class Auth extends React.Component{
  render () {
    return (
      <div>
        {this.props.isAuth ? <Redirect to='/dashboard' /> : null}
        <h2>please login</h2>
        <button onClick={this.props.login} >登录</button>
      </div>
    )
  }
}

export default Auth