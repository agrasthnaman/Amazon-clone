import Header from "./components/Header";
import './App.css';
import Home from "./components/Home";
import {BrowserRouter as Router,Switch,Route}
from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import React, { useState, useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51JAXCtSBPIwg9uCXUsh4W2ofbaFtBydLgnmaPSJLZtadvLMs7fxlJJ3l37NPhXUnxQaqJTZtxn0BD2a6GA9w1DUg00F3Ka7t18')



function App() {
  const [{},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
    console.log('THE USER IS >>>>',authUser);

    if(authUser){
      dispatch({
        type:'SET_USER',
        user:authUser
      })
    }else{
      dispatch({
        type:'SET_USER',
        user:null
      })

    }
    })
    //effect
    // return () => {
    //   cleanup
    // }
  }, [])

  return (
    //BEM
    <Router>
      <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
