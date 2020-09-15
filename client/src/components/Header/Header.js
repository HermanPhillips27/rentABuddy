import React, {useState} from 'react'
import {Link} from "react-router-dom"
import cart from '../../images/cart.png'


const Header =()=> {

    const [searchState, setSearchState] = useState("")

    // const handleInputChange = event => {
    //     const value = event.target.value;
        
    // }

    const submitValue = () => {
        
    }



    return(
        <nav className="navbar navbar-expand-lg text-white bg-info">
            <a className="navbar-brand" href="#"><img className= "logoImg" src= 'https://oaktonoutlook.com/wp-content/uploads/2019/03/Best-BUddies-color-900x688.jpg' alt='logo' /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link text-white active" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link text-white" to="/buddies">Buddies</Link>
                    <Link className="nav-link text-white" to="/senseis">Senseis</Link>
                    
                </div>
            </div>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={()=> setSearchState(searchState)}>Search</button>
            </form>
            <Link className="nav-link text-white" to="/cart">Cart</Link>
            <Link className="navbar-brand" to="/cart"><img className= "logoImg" src= {cart} alt='logo' /></Link>
            
        </nav>
    )
}

export default Header