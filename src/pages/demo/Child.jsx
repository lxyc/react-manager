import React, { Component } from 'react'

export default class Life extends Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
    console.log('--child-constructor--')
  }

  static getDerivedStateFromProps() {
    console.log('--child-getDerivedStateFromProps--')
    return null
  }

  componentDidMount() {
    console.log('--child-componentDidMount--')
  }

  shouldComponentUpdate() {
    console.log('--child-shouldComponentUpdate--')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('--child-getSnapshotBeforeUpdate--')
    return null
  }

  componentDidUpdate() {
    console.log('--child-componentDidUpdate--')
  }

  componentWilUnmount() {
    console.log('--child-componentWilUnmount--')
  }

  render() {
    console.log('--child-render--')
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}