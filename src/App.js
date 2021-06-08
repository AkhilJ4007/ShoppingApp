import React,{useEffect}  from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.component.js';
import LoginPage from './pages/LoginPage/LoginPage.component.js'
import ContactPage from './pages/ContactPage/contactPage.js'
import ShoppingPage from './pages/ShoppingPage/shoppingPage.js'
import CartPage from './pages/CartPage/CartPage.js'
import ItemPage from './pages/ItemPage/ItemPage.js'
import AddItemPage from './pages/AddItemPage/AddItemPage.js'
import { Route, Switch } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {getUserSaga} from "./redux/user/userActions"

import Header from './components/header/header.component'
function App() {


  const dispatch = useDispatch()  

  useEffect(() => {
    dispatch(getUserSaga())
  })

  return (
    <div>
    <div className = "fixedtop">
        <Header/>
    </div>

    <Switch>
      <Route exact path = "/" component = {Homepage}/>
      <Route exact path = "/login" component = {LoginPage}/>
      <Route exact path = "/contact" component = {ContactPage}/>
      <Route exact path = "/shop" component = {ShoppingPage}/>
      <Route exact path = "/cart" component = {CartPage}/>
      <Route exact path = "/item/:id" component = {ItemPage}/>
      <Route exact path = "/addItem" component = {AddItemPage}/>

    </Switch>
    
    </div>
  );
}

export default App;
