import React from 'react'
import {connect} from 'react-redux'
import {Result, List, WhiteSpace, Modal} from 'antd-mobile'
import browserCookie from 'browser-cookies'

@connect(
  state => state.user
)
 class User extends React.Component {

  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }
  
  logout() {
    const alert = Modal.alert
    alert('注销', '确认注销吗???', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确认', onPress: () => {
        browserCookie.erase('userid')  // 清除cookie
        window.location.href = window.location.href // 强制刷新页面
      }},
    ])
  }

   render () {
     const props = this.props
     const Item = List.Item
     const Brief = Item.Brief
     return props.user ? (
       <div>
         <Result
          img={<img style={{width: 50}} src={require(`../img/${props.avatar.slice(2)}.jpg`)} alt=""/>}
          title={props.user}
          message={props.type == 'consignor' ? props.company : null}
         ></Result>
        <List renderHeader={() => '简介'} >
          <Item
            multipleLine
          >
          {props.title}
          {props.desc.split('\n').map((v, i, a) => <Brief key={i}>{props.desc}</Brief>)}
          {props.money ? <Brief>Money: {props.money}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
          <Item style={{zIndex:1}} onClick={this.logout}>注销</Item>
        </List>
       </div>
     ) : null
   }
 }

 export default User