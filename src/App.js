import React from 'react'
import {connect} from 'react-redux'
import {addCount, minuxCount, addCountAsync}  from './index.redux'

@connect(
  // 你要state什么属性放到props
  (state) => {num: state},
  // 你要什么方法放到props里，自动dispatch
  {addCount, minuxCount, addCountAsync}
)
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

export default App