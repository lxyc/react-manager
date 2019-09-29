import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Main from './Main'
import About from './About'
import Topic from './Topic'

class RouterBase extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li><Link to="/">main</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/topic">topic</Link></li>
        </ul>

        <Route path="/" exact component={Main}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/topic" component={Topic}></Route>
      </Router>
    )
  }
}

export default RouterBase
