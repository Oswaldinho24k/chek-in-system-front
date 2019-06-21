import React from 'react'
import {connect} from 'react-redux'
import {fetchData} from '../../redux/ducks/users'
import ChekinsList from '../chekins/ChekinsList';
import UserCard from './UserCard';

const UserDetail = ({location, history, match, user, chekins, loguedUser}) => {    

    console.log(user)
    return (
        <div style={{width:'100%', display:'flex', justifyContent:'space-around', alignItems:'flex-start'}}>
            <UserCard {...user}/>
            <ChekinsList chekins={chekins} user={{isAdmin:true}}/>
        </div>
    )
}
const mapStateToProps=(state, {location, match})=>{
    const {pathname} = location
    let elId;
    if (pathname=='dashboard/profile')elId = state.loguedUser.id
    elId = match.params.id
    return{
        user:state.users.data.find((u)=>u.id==elId),
        chekins:state.chekins.data.filter((c)=>c.user==elId)
    }
}

export default connect(mapStateToProps,{})(UserDetail)
