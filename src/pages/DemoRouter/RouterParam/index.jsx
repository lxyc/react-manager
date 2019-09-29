import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import BaseRoute from './BaseRoute'
import Home from './Home'
import NoMatch from './NoMatch'

class Index extends Component {
  render() {
    return (
      <Router>
        <BaseRoute>
          <Switch>
            <Route path="/home/:id" component={Home}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </BaseRoute>
      </Router>
    )
  }
}

export default Index