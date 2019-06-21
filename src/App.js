import React, {useState, useReducer, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import { Routes } from './Routes';

const App = ({loguedUser}) => {    
  return (
    <>                 
      <Routes loguedUser={loguedUser}/>
    </>
  );
}

const mapStateToProps=(state)=>{
  return {
    loguedUser:state.auth.data
  }
}


export default connect(mapStateToProps, {})(App);
