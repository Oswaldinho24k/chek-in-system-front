import React, {useState, useReducer, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import { Routes } from './Routes';

const App = (props) => {  
  return (
    <>                 
      <Routes/>
    </>
  );
}

const mapStateToProps=(state)=>{
  return state
}
const mapDispatchToProps=()=>{
  
}

export default connect(mapStateToProps, {})(App);
