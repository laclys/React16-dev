import React from 'react'
import {List, InputItem, NavBar} from 'antd-mobile'
import {connect} from 'react-redux'
import {getMsgList, sendMsg, recvMsg} from '../../redux/chat.redux'
import io from 'socket.io-client'
const socket = io('ws://localhost:9098')

@connect(
  state=>state,
  {getMsgList, sendMsg, recvMsg}
)
class Chat extends React.Component{

  constructor(props) {
    super(props)
    this.state= {
      text: '',
      msg: []
    }
  }

  componentDidMount () {
  }

  handleSubmit () {
    // socket.emit('sendmsg', {text: this.state.text})
    const from = this.props.user._id
    const to = this.props.match.params.user
    const msg = this.state.text
    this.props.sendMsg({from, to, msg})
    this.setState(
      {
        text: ''
      }
    )
    
  }

  render () {
    const user = this.props.match.params.user
    const Item = List.Item
    return (
      <div id='chat-page'>
        <NavBar mode='dark'>
          {this.props.match.params.user}
        </NavBar>
        <div
          style={{height: 60}}
        />
        {this.props.chat.chatmsg.map((v , i, a) => {
          return v.from==user ? (
            <List key={i}>
              <Item>{v.content}</Item>
            </List>
          ) : (
            <List key={i}>
              <Item
              extra={'avatar'}
                className='chat-me'
              >{v.content}</Item>
            </List>
          )
        })}
        <div className="stick-footer">
          <List>
            <InputItem
              placeholder='请输入'
              value={this.state.text}
              onChange={v => {
                this.setState({text: v})
              }}
              extra={<span onClick={() => this.handleSubmit()} >发送</span>}
            ></InputItem>
          </List>
        </div>
      </div>
    )
  }
}

export default Chat