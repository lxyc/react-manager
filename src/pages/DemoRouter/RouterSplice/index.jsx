import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Main from './Main'
import About from './About'
import Topic from './Topic'

class Routers extends Component {
  render() {
    return (
      <Router>
        <Home>
          <Route path="/" exact component={Main}></Route>
          <Route path="/about">
            <About>
              <Route path="/about/more" component={Topic}></Route>
            </About>
          </Route>
          <Route path="/topic" component={Topic}></Route>
        </Home>
      </Router>
    )
  }
}

export default Routers