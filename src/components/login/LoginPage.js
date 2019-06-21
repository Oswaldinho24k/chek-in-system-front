import React from 'react'
import LoginForm from './LoginForm';
import {connect} from 'react-redux'
import {login} from '../../redux/ducks/auth'

const LoginPage = ({login, history}) => {
    const onSubmit=(values)=>{
        login(values)        
    }
    return (
        <div className="login-page">
            <h1>Runa Chekins ⌚️</h1>
            <div className="login-container-form">
                <h4>Log In </h4>
                <LoginForm onSubmit={onSubmit}/>
            </div>                        
        </div>
    )
}

const mapStateToProps=()=>{
    return{}
}



export default connect(mapStateToProps, {login})(LoginPage)
