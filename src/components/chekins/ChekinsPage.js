import React from 'react'
import ChekinsFilters from './ChekinsFilters';
import ChekinsList from './ChekinsList';
import ChekinForm from './ChekinForm';

import {connect} from 'react-redux'

const ChekinsPage = ({users,chekins,location, history, match}) => {
    return (
        <>
           <ChekinsFilters/>
           <ChekinForm/>
           <ChekinsList chekins={chekins.data}/>           
        </>
    )
}
const mapStateToProps=(state)=>{
    return {
        users:state.users,
        chekins:state.chekins
    }
  }
  const mapDispatchToProps=()=>{
    
  }

export default connect(mapStateToProps,{})(ChekinsPage)
