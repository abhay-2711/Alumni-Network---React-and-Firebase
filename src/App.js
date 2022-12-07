import React from 'react';
import './App.css';
import { useEffect } from 'react';
import Login from './components/Login';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import {getUserAuth} from "./actions/index";
import { connect } from 'react-redux';

function App(props) {

  useEffect (()=>{
    props.getUserAuth();
  },[]);

  return (
    <div className="App">
    <Router>
    <Routes>
      <Route exact path="/" element={<Login />}>
      </Route>
      <Route path="/home" element={
      <div>
      <Home />
      <Header />
      </div>
      }>
      </Route>
      {/* <Route path="/home" element=>
      </Route> */}
    </Routes>
    </Router>
    </div>
  );
}

const mapStateToProps=(state) => {
  return {};
};

const mapDispatchToProps=(dispatch)=>({
  getUserAuth:()=>dispatch(getUserAuth()),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);

