import React from 'react'
import PropTypes from 'prop-types'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
class UserCard extends React.Component {
  static propTypes = {
    userlist: PropTypes.array.isRequired
  }

  handleClick (v) {
    this.props.history.push(`/chat/${v.user}`)
  }

  render () {
    return (
      <WingBlank>
        <WhiteSpace></WhiteSpace>
        {this.props.userlist.map(v => {
          return (
            v.avatar
              ? <Card
                  style={{zIndex:1}}
                  key={v._id}
                  onClick={() => this.handleClick(v)}
                >
                <Card.Header
                  title={v.user}
                  thumb={<img style={{width: 50}} src={require(`../img/${v.avatar.slice(2)}.jpg`)} alt=''/>}
                  extra={<span>{v.title}</span>}
                >
                </Card.Header>
                <Card.Body>
                  {v.type =='consignor' ? <div>委托人：{v.company}</div> : null}
                  {v.desc.split('\n').map(d => {
                    return (
                      <div key={d}>{d}</div>
                    )
                  })}
                  {v.type =='consignor' ? <div>报酬：{v.money}</div> : null}
                </Card.Body>
              </Card>: null
          )
        })}
    </WingBlank>
    )
  }
}

export default UserCard