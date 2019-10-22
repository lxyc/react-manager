import React, { Component } from 'react'
import { Card, Spin, Icon, Alert, Switch } from 'antd'
import './index.less'

class Loadings extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false
    }
  }

  handleLoadingToggle(value) {
    this.setState({
      isLoading: value
    })
  }

  render() {
    const icon = <Icon type="loading" style={{ fontSize: 24 }} />
    return (
      <div className="ui-page loadings-page">
        <Card className="card" title="Spin用法">
          <Spin size="large" />
          
          {/* <div className="spin-wrapper">
            <Spin className="spin" />
          </div> */}

          <Spin indicator={icon} />
        </Card>

        <Card className="card" title="内容遮罩">
          <Spin tip="loading" spinning={this.state.isLoading}>
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>

          <Switch onChange={this.handleLoadingToggle.bind(this)}></Switch>
        </Card>
      </div>
    )
  }
}

export default Loadings
