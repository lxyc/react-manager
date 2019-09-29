import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {
  render() {
    return <div>
      this is Main page
      <br/>
      Link: <Link to="www.baidu.com">baidu</Link>
      <br/>
      a标签: <a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">baidu</a>
    </div>
  }
}

export default Main