import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'

import App  from './App'
import {counter, addCount, minuxCount} from './index.redux'

const store = createStore(counter)

function render() {
  ReactDom.render(<App store={store} addCount={addCount} minuxCount={minuxCount} />,document.getElementById('root'))
}
render()

store.subscribe(render)