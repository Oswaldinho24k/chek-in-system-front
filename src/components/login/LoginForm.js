import React from 'react'
import {Form} from 'antd'
import { Field, reduxForm } from 'redux-form'
import { Input, Button, Divider } from 'antd';
import {Link} from 'react-router-dom'



const TextInput = ({ input, type, label, meta: { touched, error }, ...custom }) =>{
    return(        
        <Input
            type={type}
            style={{ width: 200, marginRight:'10px' }}
            placeholder={label}            
            {...input}
            {...custom}
        />
    )
}





const LoginForm = ({handleSubmit}) => {
   
      
    return (
        <Form onSubmit={handleSubmit}>            
                <Form.Item>
                    <Field 
                    name="email" 
                    component={TextInput}
                    type={'email'}
                    label="Email"/>
                </Form.Item>                    
                
                <Form.Item>
                    <Field 
                    name="password" 
                    type={'password'}
                    component={TextInput}
                    label="Password"/>       
                </Form.Item>
                <Button type="primary" htmlType="submit">LogIn</Button>
                
                <Divider/>     
                <Link to="/" disabled>
                    Contact your admin for access
                </Link>
                     
            
            
        </Form>
    )
}

export default reduxForm({form: 'loginForm'})(LoginForm)
