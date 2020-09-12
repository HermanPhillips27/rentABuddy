import React, { useContext } from "react";
import CartContext from '../../utils/cartContext'


const AddToCartBtn = (props) => {
    const cartContext = useContext(CartContext)
    
    return(
        <button className = "btn btn-success" onClick= {() => cartContext.handleClick(props.person)}> Add to Cart</button>
    )
}

export default AddToCartBtn