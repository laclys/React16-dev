import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import App  from './App'
import {counter, addCount, minuxCount, addCountAsync} from './index.redux'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {}

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools
))

function render() {
  ReactDom.render(<App store={store} addCount={addCount} minuxCount={minuxCount} addCountAsync={addCountAsync} />,document.getElementById('root'))
}
render()

store.subscribe(render)