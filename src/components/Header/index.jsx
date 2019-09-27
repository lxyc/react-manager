import React, { Component } from 'react'
import moment from 'moment'
import './index.less'

class Header extends Component {
  state = {
    currentTime: ''
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.updateCurrentTime()
    })
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  handleLogout() {

  }

  updateCurrentTime() {
    this.setState({
      currentTime: moment().format('YYYY-MM-DD HH:mm:ss')
    })
  }

  render() {
    return (
      <div className="component-header">
        <div className="header-top">
          <span className="welcome">欢迎，admin</span>
          <span className="logout" onClick={this.handleLogout.bind(this)}>退出</span>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-l breadcrumb-title">首页</div>
          <div className="header-bottom-r">
            <span className="time">{this.state.currentTime}</span>
            <span className="weather">{}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header