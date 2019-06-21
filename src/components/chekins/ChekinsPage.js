import React from 'react'
import ChekinsFilters from './ChekinsFilters';
import ChekinsList from './ChekinsList';
import ChekinForm from './ChekinForm';


import {connect} from 'react-redux'
import { postChekin, updateChekin, deleteChekin } from '../../redux/ducks/chekins';
import { Divider } from 'antd';

const ChekinsPage = ({users,chekins, postChekin, deleteChekin, updateChekin}) => {
    const onSubmit = (values) => {        
        //add entry datetime
        values['entry'] = new Date()        
        postChekin(values)
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
        <> 
            <h2>Chekins Manager</h2>
            <div style={{width:'100%', display:'flex', justifyContent:'space-around', marginBottom:'10px'}}>            
                <ChekinsFilters/>
                <Divider type={'vertical'}/>
                <ChekinForm onSubmit={onSubmit} users={users.data}/>
            </div>
            <ChekinsList chekins={chekins.data} onUpdate={onUpdate} onDelete={onDelete}/>           
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

export default connect(mapStateToProps,{postChekin, updateChekin, deleteChekin})(ChekinsPage)
