import React from 'react'

import logoImg from './logo.jpg'
import './logo.css'
class Logo extends React.Component {

  render () {
    return (
      <div className="logo-container">
        <img src={logoImg} />
      </div>
    )
  }
}

export default Logo