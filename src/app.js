import React from 'react'
import Dashboard from './componment/dashboard/dashboard'
import Login from './container/login/login'
import Register from './container/register/register'
import Chat from './componment/chat/chat'
import {Route, Switch} from 'react-router-dom'
import AuthRoute from './componment/authroute/authroute'
import ConsignorInfo from './container/consignorinfo/consignorinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'

class App extends React.Component {
  render () {
    return (
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
          <Route path='/consignorinfo' component={ConsignorInfo} />
          <Route path='/geniusinfo' component={GeniusInfo} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/chat/:user' component={Chat} />
          {/* 如果没有命中路由就跳转Dashboard */}
          <Route component={Dashboard} />
        </Switch>
      </div>
    )
  }
}
export default App