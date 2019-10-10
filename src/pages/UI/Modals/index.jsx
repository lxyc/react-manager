import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'
import './index.less'

class Popup extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      currentModalID: 1
    }
  }

  handleOpenModal(id) {
    this.setState({
      visible: true,
      currentModalID: id
    })
  }

  handleModalCancel() {
    this.setState({
      visible: false
    })
  }

  get currentModal() {
    switch (this.state.currentModalID) {
      case 1:
        return (
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onCancel={this.handleModalCancel.bind(this)}
          >
            some content
          </Modal>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div className="popup-page">
        <Card className="card" title="基础模态框">
          <Button type="primary" onClick={this.handleOpenModal.bind(this, 1, 2)}>
            Open
          </Button>
          <Button type="primary" onClick={this.handleOpenModal.bind(this, 2)}>
            自定义页脚
          </Button>
          <Button type="primary" onClick={this.handleOpenModal.bind(this, 3)}>
            顶部20px弹窗
          </Button>
          <Button type="primary" onClick={this.handleOpenModal.bind(this, 4)}>
            水平垂直居中
          </Button>
        </Card>
        <Card className="card" title="信息确认框"></Card>

        { this.currentModal }
      </div>
    )
  }
}

export default Popup
