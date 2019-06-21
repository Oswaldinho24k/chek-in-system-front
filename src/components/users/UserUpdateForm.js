import React from 'react'
import {Form} from 'antd'
import { Field, reduxForm } from 'redux-form'
import { Input, Button, Switch } from 'antd';



const TextInput = ({ value, input, type, label, meta: { touched, error }, ...custom }) =>{
    return(        
        <Input
            type={type}
            style={{ width: 200, marginBottom:'10px' }}
            placeholder={label}            
            {...input}
            {...custom}
            defaultValue={label}
        />
    )
}

const SwitchInput=({value, input, label, meta: { touched, error }, ...custom })=>{
    return(
        <Switch 
            style={{ width: 200, marginBottom:'10px' }}
            defaultChecked={label}
            checkedChildren="Is Admin" 
            unCheckedChildren="Is Employee"            
            {...input}
            {...custom}
            onChange={(value) => input.onChange(value)} />
    )
}




const UserUpdateForm = ({handleSubmit,handleEditable,initialValues,logueduser={isAdmin:true}}) => {
    
      
    return (
        <Form onSubmit={(vals)=>{
            handleSubmit(vals)
            handleEditable()
            }}>            
                                     
               {initialValues.id==logueduser.id?
                   <div>
                       <Field 
                        name="username" 
                        component={TextInput}                        
                        type={'text'}
                        value={initialValues.username}
                        label={initialValues.username||'username'}/>
                        <Field 
                        name="email" 
                        type={'email'}
                        component={TextInput}
                        value={initialValues.email}
                        label={initialValues.email||"username@company.com"}/>
                        <Field 
                        name="phone" 
                        type={'number'}
                        component={TextInput}
                        value={initialValues.phone}
                        label={initialValues.phone||'5555555555'}/>
                   </div>:''
               }
                {
                    logueduser.isAdmin?
                    <Field 
                    name="isAdmin" 
                    component={SwitchInput}
                    value={initialValues.isAdmin}
                    label={initialValues.isAdmin||false}/> :''
                }            
            <br/>
            <Button style={{ width: 200 }} type="primary" htmlType="submit">Update User</Button>
            
        </Form>
    )
}

export default reduxForm( {form: 'userUpdateForm'})(UserUpdateForm)
