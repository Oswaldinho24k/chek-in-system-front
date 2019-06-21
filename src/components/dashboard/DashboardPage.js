import React, {useState, useEffect} from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import SideMenu from './SideMenu';
import { AdminRoutes } from '../../Routes';
import {connect} from 'react-redux'
import {logout} from '../../redux/ducks/auth'



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const DashboardPage = ({location, match, history, logueduser,logout }) => {   
  
    
    const [collapsed, setCollapsed] = useState(true)

    const onCollapse = () =>{
        setCollapsed(!collapsed)
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <SideMenu location={location} user={logueduser} logout={logout} history={history}/>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>                         
              {location.pathname.split('/').map((el, key)=><Breadcrumb.Item key={key}> {el} </Breadcrumb.Item>)}
            </Breadcrumb>
            <AdminRoutes/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Developed with 🔥 by Oswaldinho 🍕🤓</Footer>
        </Layout>
      </Layout>
    )
}

const mapStateToProps=(state)=>{
    return{
        logueduser:state.auth.data
    }
}

export default connect(mapStateToProps,{logout})(DashboardPage)
