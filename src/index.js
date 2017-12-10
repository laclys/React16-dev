import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import App  from './App'
import {counter} from './index.redux'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {}

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools
))

function AppB(params) {
  return <h2>B Page</h2>
}
function AppC(params) {
  return <h2>C Page</h2>
}
// exact表示完全匹配 路由渲染对应的模板
ReactDom.render(
  (<Provider store={store}>
      <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to='/'>A</Link>
          </li>
          <li>
            <Link to='/b'>B</Link>
          </li>
          <li>
            <Link to='/c'>C</Link>
          </li>
        </ul>
        <Route path='/' exact component={App}></Route>
        <Route path='/b' component={AppB}></Route>
        <Route path='/c' component={AppC}></Route>
      </div>
      </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)
