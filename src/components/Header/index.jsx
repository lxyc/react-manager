import React, { Component } from 'react'
import moment from 'moment'
import http from '../../utils/http'
import './index.less'

class Header extends Component {
  state = {
    currentTime: '',
    weather: '',
    weatherPic: ''
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.updateCurrentTime()
    })

    this.getWeatherData()
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

  getWeatherData() {
    const city = '北京'
    http.jsonp({
      url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    }).then(res => {
      const { weather, dayPictureUrl } = res.results[0]['weather_data'][0]
      this.setState({
        weather,
        weatherPic: dayPictureUrl
      })
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
            {<img className="weather-img" src={this.state.weatherPic} alt=""/>}
            <span className="descr">{this.state.weather}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header