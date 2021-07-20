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
import { useCookies } from "react-cookie";
import Header from './components/header/header.component'

function App() {

  const [cookies, setCookie] = useCookies(["token"]);
  const dispatch = useDispatch()  
  const token = useSelector(state => state.user.token)

  function handleCookie(token) {
    console.log("TOken",token)
    setCookie("token", "akhil", {
      path: "/",
      maxAge : 86400,
      secure : true,
      httpOnly :true
    });
  }

  useEffect(() => {
    dispatch(getUserSaga())
    //handleCookie()
  })


  useEffect(() => {
    if(token){
      handleCookie(token)
    }
    
  },[token])

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
      <Route exact path = "/shop/:cat" component = {ShoppingPage}/>
      <Route exact path = "/cart" component = {CartPage}/>
      <Route exact path = "/item/:id" component = {ItemPage}/>
      <Route exact path = "/addItem" component = {AddItemPage}/>

    </Switch>
    
    </div>
  );
}

export default App;
