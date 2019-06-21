import React from 'react'
import { Table, Divider, Tag, Button, Popconfirm } from 'antd';
import moment from 'moment'
import {Link} from 'react-router-dom'

const { Column, ColumnGroup } = Table;

const ChekinsList = ({chekins=[], onUpdate, onDelete, user={isAdmin:true}}) => {    
    return (
        <Table dataSource={chekins} rowKey={r=>r.id} pagination={false}>
            
            <Column title="Username" dataIndex="username" render={(el, obj)=><Link to={`/dashboard/users/${obj.user}`}>{el}</Link>} key="username" />                        
            <Column title="Entry" dataIndex="entry"  render={el=><p>{moment(el).format('lll')}</p>} key="entry" />
            <Column title="Exit" dataIndex="departure" render={el=>el?<p>{moment(el).format('lll')}</p>:<p>Still Working</p>} key="departure" />
            <Column title="Comment" dataIndex="comment" key="comment" />
            
            {user.isAdmin?<Column
            title="Action"
            key="action"
            render={(text, record) => (
                <span>                                                    
                    <Button type="primary" shape="circle" icon="clock-circle" onClick={()=>onUpdate(record.id)} />
                    <Divider type="vertical"/>
                    <Popconfirm
                    title={`Are you sure delete this?`}
                    onConfirm={()=>onDelete(record.id)}                    
                    okText="Yes"
                    cancelText="No">
                    <Button type="danger" shape="circle" icon="delete"  />
                   </Popconfirm>  
                </span>
            )}
            />:''}
        </Table>
    )
}

export default ChekinsList
