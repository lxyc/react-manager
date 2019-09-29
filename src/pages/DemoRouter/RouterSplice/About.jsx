import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <div>
        <div>this is About page</div>
        <Link to="/about/more">更多</Link>
        {this.props.children}
      </div>
    )
  }
}

export default About