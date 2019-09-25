import React, { Component } from 'react'
import Child from './Child'

export default class Life extends Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
    console.log('--parent-constructor--')
  }

  // state = {
  //   count: 1
  // }

  static getDerivedStateFromProps() {
    console.log('--parent-getDerivedStateFromProps--')
    return null
  }

  componentDidMount() {
    console.log('--parent-componentDidMount--')
  }

  shouldComponentUpdate() {
    console.log('--parent-shouldComponentUpdate--')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('--parent-getSnapshotBeforeUpdate--')
    return null
  }

  componentDidUpdate() {
    console.log('--parent-componentDidUpdate--')
  }

  componentWilUnmount() {
    console.log('--parent-componentWilUnmount--')
  }

  handleIncrease() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  handleDecrease() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }

  render() {
    console.log('--parent-render--')
    return (
      <div>
        <h2>React 声明周期介绍</h2>
        <button onClick={this.handleIncrease.bind(this)}>Increase</button>
        <button onClick={this.handleDecrease.bind(this)}>Decrease</button>
        <p>{this.state.count}</p>
        <Child name="xyc" />
      </div>
    )
  }
}