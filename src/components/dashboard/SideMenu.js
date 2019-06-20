import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SideMenu = () => {
    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="team" />
              <Link to={'/dashboard/users'}>
                <span>Users</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="clock-circle" />
              <Link to={'/dashboard/chekins'}>
                <span>Chekins</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="user" />
              <Link to={'/dashboard/profile'}>
                <span>Profile</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="close" />
              <Link to={'/#'}>
                <span>Log Out</span>
              </Link>
            </Menu.Item>                              
          </Menu>
    )
}

export default SideMenu
