import React, { Component } from 'react'
import { Card, Button } from 'antd'
import './index.less'

class Buttons extends Component {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }

  handleLoadingClick(loading) {
    this.setState({ loading })
  }

  render() {
    return (
      <div className="buttons">
        <Card className="card" title="基础按钮">
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
          <Button disabled>Disabled</Button>
        </Card>
        <Card className="card" title="图形按钮">
          <Button icon="plus">ADD</Button>
          <Button icon="delete">DELETE</Button>
          <Button icon="edit">EDIT</Button>
          <Button type="primary" shape="round">Search</Button>
        </Card>
        <Card className="card" title="Loading按钮">
          <Button type="primary" loading>Loading</Button>
          <Button type="primary" loading={this.state.loading} onClick={this.handleLoadingClick.bind(this, true)}>Click Me</Button>
          <Button type="primary" icon="download" loading={this.state.loading} onClick={this.handleLoadingClick.bind(this, true)}>Click Me</Button>
          <Button onClick={this.handleLoadingClick.bind(this, false)}>Done</Button>
        </Card>
      </div>
    )
  }
}

export default Buttons