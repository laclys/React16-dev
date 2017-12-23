import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Switch, Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'

function Consignor() {
  return <h2>Co</h2>
}
function Genius() {
  return <h2>Go</h2>
}
function Msg() {
  return <h2>Msg</h2>
}
function User() {
  return <h2>Me</h2>
}


@connect(
  state=>state
)
class Dashboard extends React.Component {

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