import React from 'react'
import { Table, Divider, Tag, Button, Popconfirm } from 'antd';
import moment from 'moment'
import {Link} from 'react-router-dom'

const { Column, ColumnGroup } = Table;

const UsersList = ({users=[], onDelete}) => {    
    return (
        <Table dataSource={users} rowKey={r=>r.id} pagination={false}>
            
            <Column title="Username" dataIndex="username" render={(el, obj)=><Link to={`/dashboard/users/${obj.id}`}>{el}</Link>} key="username" />                        
            <Column title="Email" dataIndex="email"  key="email" />
            <Column title="Permission" dataIndex="isAdmin" render={el=>el?<Tag>Admin</Tag>:<Tag>Employee</Tag>} key="isAdmin" />            
            <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <span>                                                    
                   <Popconfirm
                    title={`Are you sure delete ${record.username} ?`}
                    onConfirm={()=>onDelete(record.id)}                    
                    okText="Yes"
                    cancelText="No">
                    <Button type="danger" shape="circle" icon="delete" />
                   </Popconfirm>                                        
                </span>
            )}
            />
        </Table>
    )
}

export default UsersList

