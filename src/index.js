import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import App  from './App'
import {counter, addCount, minuxCount, addCountAsync} from './index.redux'

const store = createStore(counter, applyMiddleware(thunk))

function render() {
  ReactDom.render(<App store={store} addCount={addCount} minuxCount={minuxCount} addCountAsync={addCountAsync} />,document.getElementById('root'))
}
render()

store.subscribe(render)