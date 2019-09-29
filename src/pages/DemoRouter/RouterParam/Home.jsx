import React, { Component } from 'react'

class Home extends Component {
  render() {
    return <p>{JSON.stringify(this.props.match)}</p>
  }
}

export default Home