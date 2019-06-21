import React, {useState} from 'react'
import { Tag, Card, Form, Button, Icon } from 'antd';

const UserCard = ({username, phone, email, imageURL, isAdmin}) => {
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
            <Form>
                lol
            </Form>
            :
            <div>
                <h3><Icon type="user" /> {username}</h3>
                <p><Icon type="mail" /> {email}</p>
                <p><Icon type="phone" /> {phone}</p>
               <p><Icon type="safety-certificate" /> <Tag>{isAdmin?'Admin': 'Employee'}</Tag> </p> <br/>
                <Button disabled block style={{marginTop:'10px'}} onClick={handleEditable}>Update</Button>
            </div>}
        </Card>
    )
}

export default UserCard
