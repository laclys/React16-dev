import React from 'react'
import {List, InputItem, NavBar, Icon, Grid} from 'antd-mobile'
import {connect} from 'react-redux'
import {getMsgList, sendMsg, recvMsg, readMsg} from '../../redux/chat.redux'
import { getChatId } from '../../utils'
import QueueAnim from 'rc-queue-anim'

@connect(
  state=>state,
  {getMsgList, sendMsg, recvMsg, readMsg}
)
class Chat extends React.Component{

  constructor(props) {
    super(props)
    this.state= {
      text: '',
      msg: [],
      showEmoji: false
    }
  }

  componentDidMount () {
    if (!this.props.chat.chatmsg.length) {
      this.props.getMsgList()
      this.props.recvMsg()
    }
    this.fixCarousel()
  }

  componentWillUnmount () {
    // 当离开当前页面时 进行已读处理
    // console.log('unmount')
    const to = this.props.match.params.user
    this.props.readMsg(to)
  }

  /**
   * 修复ant-design中Carouse bug
   */
  fixCarousel () {
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'))
    }, 0)
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
    const emoji = '😀 😁 😂  🍇 🍉 🙈 🙉 💪 👈 🤘 🖐 ✊ 👊 🤛 👏 😎 ❤ 🗾  🏣 ⛪ ⛺ 🌁 🚕 🚀 💺 👲 🚣 🐲 🇨🇳 🌠  ☪ 🎃 🌲 ❄ 🎿 🎥  🎬 🍨 🍭'
                    .split(' ')
                    .filter(v => v)
                    .map(v => ({
                      text: v
                    }))
    const userid = this.props.match.params.user
    const Item = List.Item
    const users = this.props.chat.users
    if (!users[userid]) {
      return null
    }
    const chatid = getChatId(userid, this.props.user._id)
    // console.log(chatid)
    const chatmsg = this.props.chat.chatmsg.filter(v => v.chatid == chatid)
    return (
      <div id='chat-page'>
        <NavBar
          mode='dark'
          icon={<Icon type="left" />}
          onLeftClick={() => {
            this.props.history.goBack()
          }}
        >
          {users[userid].name}
        </NavBar>
        <div
          style={{height: 60}}
        />
        <QueueAnim delay={100}>
          {chatmsg.map((v , i, a) => {
            const avatar = require(`../img/${users[v.from].avatar.slice(2)}.jpg`)
            return v.from==userid ? (
              <List key={i}>
                <Item
                  thumb={avatar}
                >{v.content}</Item>
              </List>
            ) : (
              <List key={i}>
                <Item
                extra={<img src={avatar} alt=""/>}
                  className='chat-me'
                >{v.content}</Item>
              </List>
            )
          })}
        </QueueAnim>
        <div className="stick-footer">
          <List>
            <InputItem
              placeholder='请输入'
              value={this.state.text}
              onChange={v => {
                this.setState({text: v})
              }}
              extra={
                <div>
                  <span
                    style={{
                      marginRight: 15
                    }}
                    onClick={() => {
                      this.setState({
                        showEmoji: !this.state.showEmoji
                      })
                      this.fixCarousel()
                    }}
                  >😎</span>
                  <span onClick={() => this.handleSubmit()} >发送</span>
                </div>
              }
            ></InputItem>
          </List>
          {this.state.showEmoji ? (
            <Grid
              columnNum={9}
              carouselMaxRow={4}
              isCarousel={true}
              data={emoji}
              onClick={el => {
                this.setState({
                  text: this.state.text+el.text
                })
              }}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

export default Chat