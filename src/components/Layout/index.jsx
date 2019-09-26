import React, { Component } from 'react'
import { Layout } from 'antd'
import './index.less'

const { Header, Content, Footer, Sider } = Layout

class ComponentLayout extends Component {
  render() {
    const { sider, header, content, footer } = this.props
    return (
      <Layout className="layout">
        <Sider className="sider">{sider}</Sider>
        <Layout className="main">
          <Header className="header">{header}</Header>
          <Content className="content">{content}</Content>
          <Footer className="footer">{footer}</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default ComponentLayout