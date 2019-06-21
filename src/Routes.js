import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import DashboardPage from './components/dashboard/DashboardPage';
import LoginPage from './components/login/LoginPage';
import ChekinsPage from './components/chekins/ChekinsPage';
import UserDetail from './components/users/UserDetail';
import UsersPage from './components/users/UsersPage';

export const Routes = ({loguedUser}) => {
    return (
        <Switch>            
            <Route path={'/login'} render={props => loguedUser ? (<Redirect to={'/dashboard/profile'}/>)  : (<LoginPage {...props} />)}/>            
            <Route path={'/dashboard'} render={props => loguedUser ? (<DashboardPage {...props} />) : (<Redirect to={'/login'}/>)}/>            
        </Switch>
    )
}

export const AdminRoutes = () => {
    return (
        <Switch>            
            <Route path={'/dashboard/chekins'} component={ChekinsPage}/>            
            <Route path={'/dashboard/profile'} component={UserDetail}/>                        
            <Route exact path={'/dashboard/users/:id'} component={UserDetail}/>
            <Route exact path={'/dashboard/users'} component={UsersPage}/>
        </Switch>
    )
}


