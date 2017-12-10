import React from 'react'

class App extends React.Component {
  render() {
    const store = this.props.store
    const num = store.getState()
    const addCount = this.props.addCount
    const minuxCount = this.props.minuxCount
    const addCountAsync = this.props.addCountAsync

    return (
      <div>
        <h1>Show:{num}</h1>
        <button onClick={() => store.dispatch(addCount())} >ADD 1</button>
        <button onClick={() => store.dispatch(minuxCount())} >MINUS 1</button>
        <button onClick={() => store.dispatch(addCountAsync())} >ASYNC ADD 1</button>
      </div>
    )
  }
}

export default App