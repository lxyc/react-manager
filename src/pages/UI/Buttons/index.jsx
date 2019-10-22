import React, { Component } from 'react'
import { Card, Button, Radio } from 'antd'
import './index.less'

class Buttons extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      buttonSize: 'default'
    }
  }

  handleLoadingClick(loading) {
    this.setState({ loading })
  }

  handleRodiaChange(e) {
    this.setState({
      buttonSize: e.target.value
    })
  }

  render() {
    return (
      <div className="ui-page buttons-page">
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
          <Button type="primary" shape="circle">X</Button>
        </Card>
        <Card className="card" title="Loading按钮">
          <Button type="primary" loading>Loading</Button>
          <Button type="primary" loading={this.state.loading} onClick={this.handleLoadingClick.bind(this, true)}>Click Me</Button>
          <Button type="primary" icon="download" loading={this.state.loading} onClick={this.handleLoadingClick.bind(this, true)}>Click Me</Button>
          <Button onClick={this.handleLoadingClick.bind(this, false)}>Done</Button>
        </Card>
        <Card className="card group" title="按钮组">
          <Button.Group>
            <Button type="primary" icon="left">Back</Button>
            <Button type="primary" icon="right">Next</Button>
          </Button.Group>
        </Card>
        <Card className="card" title="按钮尺寸">
          <Radio.Group onChange={this.handleRodiaChange.bind(this)}>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
          <p></p>
          <Button type="primary" size={this.state.buttonSize}>Primary</Button>
          <Button type="danger" size={this.state.buttonSize}>Danger</Button>
        </Card>
      </div>
    )
  }
}

export default Buttons