import React from 'react'
import axios from 'axios'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'

class Consignor extends React.Component{

  constructor(props) {
    super(props)
    this.state={
      data: []
    }
  }

  componentDidMount () {
    axios.get('/user/list?type=genius')
      .then(res => {
        if (res.data.code == 0) {
          this.setState({
            data: res.data.data
          })
        }
      })
  }
  render () {
    console.log(this.state)
    return (
      <WingBlank>
        <WhiteSpace></WhiteSpace>
        {this.state.data.map(v => {
          return (
            v.avatar
              ? <Card key={v._id}>
                <Card.Header
                  title={v.user}
                  // thumb={require(`../img/${v.avatar.slice(2)}.jpg`)}
                  thumb={<img style={{width: 50}} src={require(`../img/${v.avatar.slice(2)}.jpg`)} alt=''/>}
                  extra={<span>{v.title}</span>}
                >
                </Card.Header>
                <Card.Body>
                  {v.desc.split('\n').map(v => {
                    return (
                      <div key={v}>{v}</div>
                    )
                  })}
                </Card.Body>
              </Card>: null
          )
        })}
      </WingBlank>
    )
  }
}

export default Consignor