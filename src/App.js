import React, { useState } from 'react';
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
// import {Redirect , Switch } from 'react-router-dom';


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// mistake----
// import userContext from './Context/userContext';
import { userContext } from './Context/userContext';

import firebase from "firebase/app";
import "firebase/auth";


import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Notfound from "./components/Notfound";
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebaseconfig from './config/firebaseconfig';
//firebase
firebase.initializeApp(firebaseconfig);


const App = () => {
  const [user, setUser] = useState(null);


  return (
    <Router>
      <ToastContainer />
      <userContext.Provider value={{ user, setUser }}>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="*" component={Notfound} />

        </Switch>
<Footer/>
      </userContext.Provider>

    </Router>

  );
};
export default App;