import React, {useState} from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import SideMenu from './SideMenu';
import { AdminRoutes } from '../../Routes';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const DashboardPage = (props) => {    
    const {location} = props
    const [collapsed, setCollapsed] = useState(true)

    const onCollapse = () =>{
        setCollapsed(!collapsed)
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <SideMenu/>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>                         
              {location.pathname.split('/').map((el, key)=><Breadcrumb.Item key={key}> {el} </Breadcrumb.Item>)}
            </Breadcrumb>
            <AdminRoutes/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
}

export default DashboardPage
