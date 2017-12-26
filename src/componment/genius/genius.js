import React from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from '../../componment/usercard/usercard'

@connect(
  state=>state.chatuser,
  {getUserList}
)
class Genius extends React.Component{

  componentDidMount () {
    this.props.getUserList('consignor')
  }
  render () {
    console.log(this.state)
    return <UserCard  userlist={this.props.userlist}/>
  }
}

export default Genius