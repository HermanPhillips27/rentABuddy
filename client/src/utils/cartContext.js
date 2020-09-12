import React from 'react';
  

const CartContext  = React.createContext({
    cart: [],
    handleClick: () => {},
    removeItem: () => {}
})

export default CartContext;