import React from 'react'
import {connect} from 'react-redux'
import {fetchData} from '../../redux/ducks/users'
import ChekinsList from '../chekins/ChekinsList';
import UserCard from './UserCard';
import { updateChekin, deleteChekin } from '../../redux/ducks/chekins';
import {updateUser} from '../../redux/ducks/users'

const UserDetail = ({location, history, match, user, chekins, logueduser, updateChekin, deleteChekin, updateUser}) => {


    const updateProfile=(vals)=>{        
        updateUser(vals)
    } 
    const onUpdate = (id) => {        
        //add departure datetime
        const values = {
            id:id,
            departure: new Date()
        }        
        updateChekin(values)                
    }
    const onDelete = (id) => {        
        deleteChekin(id)        
    }  
    return (
        <div style={{width:'100%', display:'flex', justifyContent:'space-around', alignItems:'flex-start'}}>
            <UserCard {...user} onSubmit={updateProfile} logueduser={logueduser}/>
            <ChekinsList chekins={chekins} onUpdate={onUpdate} onDelete={onDelete} user={logueduser}  />
        </div>
    )
}
const mapStateToProps=(state, {location, match})=>{
    const {pathname} = location    
    let elId;
    if (pathname=='/dashboard/profile')elId = state.auth.data.id
    else elId = match.params.id    
    return{
        user:state.users.data.find((u)=>u.id==elId),
        chekins:state.chekins.data.filter((c)=>c.user==elId),
        logueduser:state.auth.data
    }
}

export default connect(mapStateToProps,{updateChekin, deleteChekin, updateUser})(UserDetail)
