import React, {useState} from 'react'
import { Tag, Card, Form, Button, Icon } from 'antd';
import UserUpdateForm from './UserUpdateForm'

const UserCard = ({id, username, phone, email, imageURL, isAdmin, onSubmit, logueduser}) => {
    const [editable, setEditable] = useState(false)

    const handleEditable=()=>{
        setEditable(!editable)
    }
    
    return (
        <Card
            hoverable
            style={{ width: 300, background:'white', padding:'10px', borderRadius:'5px'}}
            cover={<img alt="example" src={imageURL} />}
        >
            {editable?
            <UserUpdateForm logueduser={logueduser} handleEditable={handleEditable} onSubmit={onSubmit} initialValues={{id, username, email, phone, isAdmin}}/>
            :
            <span>
                <h3><Icon type="user" /> {username}</h3>
                <p><Icon type="mail" /> {email}</p>
                <p><Icon type="phone" /> {phone}</p>
               <span><Icon type="safety-certificate" /> <Tag>{isAdmin?'Admin': 'Employee'}</Tag> </span> <br/>
                <Button block style={{marginTop:'10px'}} onClick={handleEditable}>Update</Button>
            </span>}
        </Card>
    )
}

export default UserCard
