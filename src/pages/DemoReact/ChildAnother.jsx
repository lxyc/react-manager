import React, { Component } from 'react'

export default class ChildAnother extends Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
    console.log('--child2-constructor--')
  }

  static getDerivedStateFromProps() {
    console.log('--child2-getDerivedStateFromProps--')
    return null
  }

  componentDidMount() {
    console.log('--child2-componentDidMount--')
  }

  shouldComponentUpdate() {
    console.log('--child2-shouldComponentUpdate--')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('--child2-getSnapshotBeforeUpdate--')
    return null
  }

  componentDidUpdate() {
    console.log('--child2-componentDidUpdate--')
  }

  componentWillUnmount() {
    console.log('--child2-componentWillUnmount--')
  }

  handleIncrease() {
    this.setState(prevState => ({
      mount: prevState.mount + 1
    }))
  }

  render() {
    console.log('--child2-render--')
    return (
      <div>
        <hr/>
        <h2>我是另一个子组件</h2>
        <button onClick={this.handleIncrease.bind(this)}>Increase</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}