import React, {useState, useReducer, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {fetchData, searchData, fetchCancel} from './redux/ducks/beers'
import { Routes } from './Routes';

const App = (props) => {

  
  console.log(props)
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

export default connect(mapStateToProps, {fetchData, searchData, fetchCancel})(App);
