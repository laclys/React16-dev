import React from 'react'
import {Grid, List} from 'antd-mobile'

class AvatarSelector extends React.Component {

  constructor (props) {
    super(props)
    this.state={}
  }

  render () {
    //头像数据列表
    const avatarList = '01,02,03,04,05,06,07,08'
                        .split(',')
                        .map(v => ({
                          icon: require(`../img/${v}.jpg`),
                          text: `头像${v}`
                        }))
    const gridHeader = this.state.icon
                        ? (
                          <div>
                            <span>已选择图片</span>
                            <img style={{width: 20}} src={this.state.icon} alt={this.state.text}/>
                          </div>
                        )
                        : <div>请选择图片</div>
    return (
      <div>
        <List
          renderHeader = {() => gridHeader}
        >
          <Grid
            data={avatarList}
            columnNum={4}
            onClick={elm => {
              this.setState(elm)
              this.props.selectAvatar(elm.text)
            }}
          />
        </List>
      </div>
    )
  }
}

export default AvatarSelector