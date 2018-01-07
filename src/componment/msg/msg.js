import React from 'react'
import {connect} from 'react-redux'
import {List, Badge} from 'antd-mobile'

@connect(
  state => state
)
class Msg extends React.Component {

  getLast (arr) {
    return arr[arr.length-1]
  }

  render () {
    if (!this.props.chat.chatmsg.length) {
      return null
    }
    const Item = List.Item
    const Brief = Item.Brief
    const userid = this.props.user._id
    const masgGroup = {}
    this.props.chat.chatmsg.forEach(v => {
      masgGroup[v.chatid] = masgGroup[v.chatid] || []
      masgGroup[v.chatid].push(v)
    })

    const chatList = Object.values(masgGroup).sort((a, b) => {
      const a_last = this.getLast(a).create_time
      const b_last = this.getLast(b).create_time
      return b_last - a_last
    })


    // 根据chatid，用户分组
    console.log(chatList)
    return (
      <div>
          {chatList.map(v => {
            const lastItem = this.getLast(v)
            const targetId = v[0].from == userid ? v[0].to : v[0].from
            const name = this.props.chat.users[targetId] ? this.props.chat.users[targetId].name : ''
            const avatar = this.props.chat.users[targetId] ? this.props.chat.users[targetId].avatar : ''
            const unreadNum = v.filter(v => !v.read && v.to == userid).length
            return (
              <List
                key={lastItem._id}
              >
                <Item
                  style={{zIndex:1}}
                  extra={<Badge text={unreadNum}></Badge>}
                  thumb={require(`../img/${avatar.slice(2)}.jpg`)}
                  arrow='horizontal'
                  onClick={() => {
                    this.props.history.push(`/chat/${targetId}`)
                  }}
                >
                  {lastItem.content}
                  <Brief>{name}</Brief>
                </Item>
              </List>
              )})}
      </div>
    )
  }
}

export default Msg