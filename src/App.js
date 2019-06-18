import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

const App = (props) => {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return state.app
}
const mapDispatchToProps=()=>{
  
}

export default connect(state=>state.app)(App);
