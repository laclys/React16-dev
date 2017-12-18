import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import AuthRoute from './componment/authroute/authroute'
import ConsignorInfo from './container/consignorinfo/consignorinfo'
import Login from './container/login/login'
import Register from './container/register/register'

import './config'
import './index.css'
import reducers from './reducer'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {}

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  reduxDevtools
))

// exact表示完全匹配 路由渲染对应的模板
ReactDom.render(
  (<Provider store={store}>
      <BrowserRouter>
        <div>
          <AuthRoute></AuthRoute>
          <Switch>
            <Route path='/consignorinfo' component={ConsignorInfo} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)
