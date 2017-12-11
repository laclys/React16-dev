import React from 'react'
import {connect} from 'react-redux'
import {login, getUserDate} from './Auth.redux'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

@connect(
  state=>state.auth,
  {login, getUserDate}
)
class Auth extends React.Component{

  componentDidMount() {
    // axios.get('/data')
    //   .then(res => {
    //     console.log(res)
    //   })
    this.props.getUserDate()
  }

  render () {
    return (
      <div>
        <div>{this.props.user}</div>
        {this.props.isAuth ? <Redirect to='/dashboard' /> : null}
        <h2>please login</h2>
        <button onClick={this.props.login} >登录</button>
      </div>
    )
  }
}

export default Auth