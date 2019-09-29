import React, { Component } from 'react'

export default class child extends Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
    console.log('--child1-constructor--')
  }

  static getDerivedStateFromProps() {
    console.log('--child1-getDerivedStateFromProps--')
    return null
  }

  componentDidMount() {
    console.log('--child1-componentDidMount--')
  }

  shouldComponentUpdate() {
    console.log('--child1-shouldComponentUpdate--')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('--child1-getSnapshotBeforeUpdate--')
    return null
  }

  componentDidUpdate() {
    console.log('--child1-componentDidUpdate--')
  }

  componentWillUnmount() {
    console.log('--child1-componentWillUnmount--')
  }

  handleIncrease() {
    this.setState(prevState => ({
      mount: prevState.mount + 1
    }))
  }

  render() {
    console.log('--child1-render--')
    return (
      <div>
        <hr/>
        <h2>我是子组件</h2>
        <button onClick={this.handleIncrease.bind(this)}>Increase</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}