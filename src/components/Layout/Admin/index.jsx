import React, { Component } from 'react'
import { Layout } from 'antd'
import './index.less'

import MFooter from '../../Footer'
import MHeader from '../../Header'
import MNavLeft from '../../NavLeft'

const { Header, Content, Footer, Sider } = Layout

class ComponentLayout extends Component {
  render() {
    return (
      <Layout className="layout">
        <Sider className="sider" width="256">
          <MNavLeft />
        </Sider>
        <Layout className="main">
          <Header className="header">
            <MHeader />
          </Header>
          <Content className="content">{this.props.children}</Content>
          <Footer className="footer">
            <MFooter />
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default ComponentLayout
