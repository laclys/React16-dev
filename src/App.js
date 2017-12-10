import React from 'react'
import {addCount} from './index.redux'

class App extends React.Component {
  render() {
    const store = this.props.store
    const num = store.getState()
    return (
      <div>
        <h1>Show:{num}</h1>
        <button onClick={() => store.dispatch(addCount())} >ADD 1</button>
      </div>
    )
  }
}

export default App