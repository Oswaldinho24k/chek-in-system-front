import React from 'react'
import {Form} from 'antd'
import { Field, reduxForm } from 'redux-form'
import { Input, Button, Switch } from 'antd';



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

const SwitchInput=({ input, label, meta: { touched, error }, ...custom })=>{
    return(
        <Switch 
            style={{ width: 100, marginRight:'10px' }}
            checkedChildren="Is Admin" 
            unCheckedChildren="Is Employee"            
            {...input}
            {...custom}
            onChange={(value) => input.onChange(value)} />
    )
}




const UserForm = ({handleSubmit}) => {
   
      
    return (
        <Form onSubmit={handleSubmit}>            
                                     
                <Field 
                name="username" 
                component={TextInput}
                type={'text'}
                label="Username"/>
                <Field 
                name="email" 
                type={'email'}
                component={TextInput}
                label="username@company.com"/>
                <Field 
                name="isAdmin" 
                component={SwitchInput}
                label="Is Admin"/>             
                     
            <Button type="primary" htmlType="submit">Register User</Button>
            
        </Form>
    )
}

export default reduxForm({form: 'usersForm'})(UserForm)
