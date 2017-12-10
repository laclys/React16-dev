import React from 'react'
import {Route, Link, Redirect, Switch} from 'react-router-dom'
import App  from './App'
import {connect} from 'react-redux'
import {logout} from './Auth.redux'

function AppB(params) {
  return <h2>B Page</h2>
}
function AppC(params) {
  return <h2>C Page</h2>
}

@connect(
  state => state.auth,
  {logout}
)
class Dashboard extends React.Component{
  constructor(props) {
    super(props)

  }
  render () {
    console.log(this.props)
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
        {this.props.isAuth ? <button onClick={this.props.logout}>logout</button> : null}
        <ul>
          <li>
            <Link to='/dashboard/'>A</Link>
          </li>
          <li>
            <Link to='/dashboard/b'>B</Link>
          </li>
          <li>
            <Link to='/dashboard/c'>C</Link>
          </li>
          <Route path='/dashboard/' exact component={App}></Route>
          <Route path='/dashboard/b' component={AppB}></Route>
          <Route path='/dashboard/c' component={AppC}></Route>
        </ul>
  </div>
    )

    return this.props.isAuth ? app : redirectToLogin
  }
}

export default Dashboard