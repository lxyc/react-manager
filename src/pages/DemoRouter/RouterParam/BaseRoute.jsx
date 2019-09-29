import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BaseRoute extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/home/homeID">home</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default BaseRoute