import React, { useEffect, useContext } from "react";
import CartContext from "../../utils/cartContext";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const cartArr = cartContext.cart;
  const removeItem = cartContext.removeItem

  
  return (
    <div className="container">
      <ul className="list-group list-group-flush">
        {cartArr.map((cartItem) => (
          <li className="media pb-3">
            <img
              src={cartItem.imgURL}
              className="mr-3 img-thumbnail"
              width="200px"
              alt="..."
            />
            <div className="media-body text-white">
              <h4 className="mt-0 mb-1">{cartItem.name}</h4>
              <h5 className="mt-0 mb-1">{cartItem.price}$</h5>
      
            </div>
            <button type="button" onClick= {() => removeItem(cartItem.name)} className="btn btn-outline-danger">Remove</button>
          </li>
          
        ))}
        <li className="list-group-item">
          Total: {cartArr.reduce((total, item) => total + item.price, 0)}
        </li>
      </ul>
    </div>
  );
};
export default Cart;
