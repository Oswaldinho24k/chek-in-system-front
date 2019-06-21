import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link} from 'react-router-dom'


const SideMenu = ({location}) => {    
    return (
        <Menu theme="dark" defaultSelectedKeys={[`${location.pathname}`]} mode="inline">
            <Menu.Item key="/dashboard/users">
              <Icon type="team" />
              <span>Users</span>
              <Link to={'/dashboard/users'}/>
                              
            </Menu.Item>
            <Menu.Item key="/dashboard/chekins">
              <Icon type="clock-circle" />
              <span>Chekins</span>
              <Link to={'/dashboard/chekins'}/>                              
            </Menu.Item>
            <Menu.Item key="/dashboard/profile">
              <Icon type="user" />
              <span>Profile</span>
              <Link to={'/dashboard/profile'}/>              
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="close" />              
                <span>Log Out</span>            
            </Menu.Item>                              
          </Menu>
    )
}

export default SideMenu
