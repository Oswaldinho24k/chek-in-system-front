import React from 'react'
import { Table, Divider, Tag } from 'antd';
import moment from 'moment'
import {Link} from 'react-router-dom'

const { Column, ColumnGroup } = Table;

const ChekinsList = ({chekins=[]}) => {    
    return (
        <Table dataSource={chekins} rowKey={r=>r.id}>
            
            <Column title="Username" dataIndex="username" render={(el, obj)=><Link to={`/dashboard/users/${obj.id}`}>{el}</Link>} key="username" />                        
            <Column title="Entry" dataIndex="entry"  render={el=><p>{moment(el).format('LLLL')}</p>} key="entry" />
            <Column title="Departure" dataIndex="departure" render={el=><p>{moment(el).format('LLLL')}</p>} key="departure" />
            <Column title="Comment" dataIndex="comment" key="comment" />
            
            <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <span>                                
                <a href="javascript:;">Delete</a>
                </span>
            )}
            />
        </Table>
    )
}

export default ChekinsList
