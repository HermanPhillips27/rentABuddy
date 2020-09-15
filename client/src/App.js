import React, { useState, useEffect } from 'react';
import './App.css';
import BuddiesPage from './Pages/Buddies'
import SenseiPage from './Pages/Teacher'
import CartPage from './Pages/Cart'
import HomePage from './Pages/home'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import CartContext from './utils/cartContext';
import Header from './components/Header/Header'

function App() {
  const initialCart = JSON.parse(localStorage.getItem("cart"))
    const [cart, setCart] = useState(initialCart || [])
    const handleClick = (person) => {
      if(!cart.includes(person))
        setCart([...cart, person]);  
    }
    
    const removeItem =(name) => {
      setCart(cart.filter(cartItem => cartItem.name !== name))
      console.log(name)
    }
    
    useEffect(() => {
      localStorage.clear();
      let cartStringify = JSON.stringify(cart)
      localStorage.setItem("cart", cartStringify)
      },[cart])

      console.log(cart)

  return (
    <CartContext.Provider value={{cart, handleClick, removeItem}}>
      <Router>
        <Header/>
          <Switch>
            <Route exact path='/'  component={HomePage} />
            <Route exact path='/cart' component={CartPage} />
            <Route exact path='/buddies' component={BuddiesPage} />
            <Route exact path='/senseis' component={SenseiPage} />
          </Switch>
        </Router>
    </CartContext.Provider>
  );
}

export default App;