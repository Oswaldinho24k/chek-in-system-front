import React from 'react'
import UsersList from './UsersList';
import UserForm from './UserForm'
import UserFilters from './UserFilters'
import {connect} from 'react-redux'
import {postUser, deleteUser, updateUser} from '../../redux/ducks/users'
import {message, Divider} from 'antd'

const UsersPage = ({users, postUser, deleteUser, updateUser}) => {
    const onSubmit = (vals) =>{
        vals['password'] = 'password123'
        postUser(vals)
    }
    const onUpdate = (id) => {        
        //add departure datetime
        const values = {
            id:id,
            departure: new Date()
        }        
        updateUser(values)        
    }
    const onDelete = (id) => {        
        deleteUser(id)        
    }
    return (
        <div>
            
            <h2>Users Manager</h2>
            <div style={{width:'100%', display:'flex', justifyContent:'space-around', marginBottom:'10px'}}>            
                <UserFilters/>
                <Divider type={'vertical'}/>
                <UserForm onSubmit={onSubmit}/>
            </div>
            <UsersList users={users.data} onDelete={onDelete}/>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}

export default connect(mapStateToProps, {postUser, deleteUser, updateUser})(UsersPage)
