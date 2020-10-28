import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/Homepage.component.js';
import LoginPage from './pages/LoginPage/LoginPage.component.js'
import ContactPage from './pages/ContactPage/contactPage.js'
import shoppingPage from './pages/ShoppingPage/shoppingPage.js'

import { Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div>
    <Switch>
      <Route exact path = "/" component = {Homepage}/>
      <Route exact path = "/login" component = {LoginPage}/>
      <Route exact path = "/contact" component = {ContactPage}/>
      <Route exact path = "/shop" component = {shoppingPage}/>
    </Switch>
    </div>
  );
}

export default App;
