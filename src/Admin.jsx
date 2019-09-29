import React, { Component } from 'react'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Header from './components/Header'
import NavLeft from './components/NavLeft'
import Home from './pages/Home'
import './styles/common.less'

class Admin extends Component {
  render() {
    const layoutProps = {
      sider: <NavLeft />,
      header: <Header />,
      content: <Home />,
      footer: <Footer />
    }
    return (
      <Layout {...layoutProps} />
    )
  }
}

export default Admin
