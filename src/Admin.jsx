import React, { Component } from 'react'
// import { Row, Col } from 'antd'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Header from './components/Header'
import NavLeft from './components/NavLeft'
import './styles/common.less'

class Admin extends Component {
  render() {
    const layoutProps = {
      sider: <NavLeft />,
      header: <Header />,
      content: 'content',
      footer: <Footer />
    }
    return (
      // <Row className="container">
      //   <Col span={3} className="nav-left">
      //     <NavLeft />
      //   </Col>
      //   <Col span={21} className="main">
      //     <Header />
      //     <Row className="content">
      //       content
      //       {/* {this.props.children} */}
      //     </Row>
      //     <Footer />
      //   </Col>
      // </Row>
      <Layout {...layoutProps} />
    )
  }
}

export default Admin
