import React from 'react'
import {Form} from 'antd'
import { Field, reduxForm } from 'redux-form'
import { Select, Input, Button } from 'antd';

const { Option } = Select;

const SelectUser = ({ input, data=[], label, meta: { touched, error }, children, ...custom }) => {         
      
      const onSearch = (val) => {
          //search to the backend
        //console.log('search:', val);
      }
    return(
        <Select                        
            onChange={(value) => input.onChange(value)}
            children={children}            
            showSearch
            style={{ width: 200, marginRight:'10px' }}
            placeholder={label}
            optionFilterProp="children"            
            onSearch={onSearch}
            {...input}
            {...custom}                    
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
            {data.map((u,key)=><Option key={key} value={u.id}>{u.username}</Option>)}
        </Select>
        )
            
    }

const CommentInput = ({ input, label, meta: { touched, error }, ...custom }) =>{
    return(        
        <Input
            style={{ width: 200, marginRight:'10px' }}
            placeholder={label}            
            {...input}
            {...custom}
        />
    )
}




const ChekinForm = ({handleSubmit, users}) => {
   
      
    return (
        <Form onSubmit={handleSubmit}>            
                <Field 
                name="user" 
                component={SelectUser}
                label="Choose the user"
                data={users}/>                         
                <Field 
                name="comment" 
                component={CommentInput}
                label="Comment about the user"/>              
                     
            <Button type="primary" htmlType="submit">Check In</Button>
            
        </Form>
    )
}

export default reduxForm({form: 'chekinsForm'})(ChekinForm)
