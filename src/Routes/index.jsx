import React, { Component } from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import LayoutAdmin from '../components/Layout/Admin'
import Login from '../pages/Login'
import NoMatch from '../pages/NoMatch'

import Home from '../pages/Home'
import Buttons from '../pages/UI/Buttons'
import Modals from '../pages/UI/Modals'
import Loadings from '../pages/UI/Loadings'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/login" component={Login} />

          <Route path="/">
            <LayoutAdmin>
              <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/ui/buttons" component={Buttons} />
                <Route path="/ui/modals" component={Modals} />
                <Route path="/ui/loadings" component={Loadings} />
                <Route component={NoMatch} />
              </Switch>
            </LayoutAdmin>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default Routes
