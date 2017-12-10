import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import App  from './App'
import {counter} from './index.redux'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {}

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools
))


ReactDom.render(
  (<Provider store={store}>
      <App />
  </Provider>),
  document.getElementById('root')
)
