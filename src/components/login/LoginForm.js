import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom'

const LoginForm = ({handleChange, handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Item>
                <Input
                name={'email'}
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
                />    
            </Form.Item>
            <Form.Item>            
                <Input
                name={'password'}
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
                />            
            </Form.Item>
            <Form.Item>           
            <Link disabled className="login-form-forgot" to="/login">
                Forgot password
            </Link> <br/>
            <Button block type="primary" htmlType="submit" className="login-form-button">
                Log in
            </Button>
            <br/>
            Or <Link disabled to="/login">Contact the Admin</Link>
        </Form.Item>
      </Form>
    )
}

export default LoginForm
