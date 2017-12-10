import React from 'react'
import {connect} from 'react-redux'
import {addCount, minuxCount, addCountAsync}  from './index.redux'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Show:{this.props.num}</h1>
        <button onClick={this.props.addCount} >ADD 1</button>
        <button onClick={this.props.minuxCount} >MINUS 1</button>
        <button onClick={this.props.addCountAsync} >ASYNC ADD 1</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {num: state}
}

const actionCreators = {addCount, minuxCount, addCountAsync}

App = connect(mapStateToProps, actionCreators)(App)
export default App