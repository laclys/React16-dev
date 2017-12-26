 import React from 'react'
import {connect} from 'react-redux'
import {Result, List, WhiteSpace} from 'antd-mobile'

@connect(
  state => state.user
)
 class User extends React.Component {
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
          <Item>注销</Item>
        </List>
       </div>
     ) : null
   }
 }

 export default User