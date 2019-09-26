import React, { Component } from 'react'
import Life from './pages/demo/Life'

class App extends Component {
  state = {
    hasLife: true
  }

  handleToggle() {
    this.setState(prevState => ({
      hasLife: !prevState.hasLife
    }))
  }

  render() {
    return <div className="App">
      {this.state.hasLife && <Life />}
      <button onClick={this.handleToggle.bind(this)}>Toggle</button>
    </div>
  }
}

export default App
