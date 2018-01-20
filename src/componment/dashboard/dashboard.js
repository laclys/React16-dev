import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Switch, Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Consignor from '../consignor/consignor'
import Genius from '../genius/genius'
import User from '../../componment/user/user'
import {getMsgList, recvMsg} from '../../redux/chat.redux'
import Msg from '../../componment/msg/msg'
import QueueAnim from 'rc-queue-anim'

@connect(
  state=>state,
  {getMsgList, recvMsg}
)
class Dashboard extends React.Component {

  componentDidMount () {
    // 切换dashboard时不需要重新获取数据
    if (!this.props.chat.chatmsg.length) {
      this.props.getMsgList()
      this.props.recvMsg()
    }
  }

  render () {
    const {pathname} = this.props.location
    console.log(pathname)
    const user = this.props.user

    const navList = [
      {
        path: '/consignor',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Consignor,
        hide: user.type == 'genius'
      },
      {
        path: '/genius',
        text: '委托人',
        icon: 'job',
        title: '任务列表',
        component: Genius,
        hide: user.type == 'consignor'
      },
      {
        path: '/msg',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Msg
      },
      {
        path: '/me',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: User
      }
    ]
    return (
      <div>
        <NavBar className='fixed-header' mode="dard" >{navList.find(v => v.path === pathname).title}</NavBar>
        <div style={{marginTop: 45}}>
          <Switch>
            {navList.map(v => {
              return (
                <Route key={v.path} path={v.path} component={v.component}></Route>
              )
            })}
          </Switch>
        </div>
        <NavLinkBar data={navList} ></NavLinkBar>
      </div>

    )
  }
}

export default Dashboard