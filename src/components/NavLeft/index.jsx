import React, { Component } from 'react'
import { Menu } from 'antd'
import menuConfig from '../../config/menuConfig'
import './index.less'

const { SubMenu, Item } = Menu

class NavLeft extends Component {
  state = {
    openKeys: ['/home'],
    selectedKeys: ['/home']
  }
  rootSubmenuKeys = menuConfig.map(e => e.key)

  onOpenChange(openKeys) {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }

  renderMune(menu) {
    if (!menu.children) {
      return <Item key={menu.key}>{menu.title}</Item>
    }
    return (
      <SubMenu key={menu.key} title={menu.title}>
        {menu.children.map(item => this.renderMune(item))}
      </SubMenu>
    )
  }

  render() {
    return (
      <div className="nav-left">
        <div className="logo">
          <h1>REACT MS</h1>
        </div>
        <Menu
          mode="inline"
          theme="dark"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange.bind(this)}
        >
          {menuConfig.map(menu => this.renderMune(menu))}
        </Menu>
      </div>
    )
  }
}

export default NavLeft
