import React from "react";


const AddToCartBtn = (props) => {
    
    const handleClick = () => {
        
        props.localCart.push(props.person)
        console.log(props.localCart)
        localStorage.clear();
        let cartStringify = JSON.stringify(props.localCart)
        localStorage.setItem("cart", cartStringify)
    }
    return(
        <button className = "btn btn-success" onClick= {handleClick}> Add to Cart</button>
    )
}

export default AddToCartBtn