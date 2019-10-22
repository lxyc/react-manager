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

  handleConfirm(type) {
    Modal[type]({
      title: 'this is title',
      content: 'this is content',
      // okType: 'danger',
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('cancel')
      }
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
            onOk={this.handleModalCancel.bind(this)}
          >
            some content
          </Modal>
        )
      case 2:
        return (
          <Modal
            title="Modal"
            visible={this.state.visible}
            footer={
              <Button type="primary" onClick={this.handleModalCancel.bind(this)}>
                Return
              </Button>
            }
            onCancel={this.handleModalCancel.bind(this)}
          >
            something
          </Modal>
        )
      case 3:
        return (
          <Modal
            title="顶部Modal"
            style={{ top: 20 }}
            visible={this.state.visible}
            onCancel={this.handleModalCancel.bind(this)}
            onOk={this.handleModalCancel.bind(this)}
          ></Modal>
        )
      case 4:
        return (
          <Modal
            title="居中弹窗"
            centered
            visible={this.state.visible}
            onCancel={this.handleModalCancel.bind(this)}
            onOk={this.handleModalCancel.bind(this)}
          ></Modal>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div className="ui-page popup-page">
        <Card className="card" title="基础模态框">
          <Button type="primary" onClick={this.handleOpenModal.bind(this, 1)}>
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
        <Card className="card" title="信息确认框">
          <Button type="primary" onClick={this.handleConfirm.bind(this, 'confirm')}>
            Confirm
          </Button>
          <Button type="primary" onClick={this.handleConfirm.bind(this, 'success')}>
            Success
          </Button>
          <Button type="primary" onClick={this.handleConfirm.bind(this, 'error')}>
            Error
          </Button>
          <Button type="primary" onClick={this.handleConfirm.bind(this, 'warning')}>
            Warning
          </Button>
        </Card>

        {this.currentModal}
      </div>
    )
  }
}

export default Popup
