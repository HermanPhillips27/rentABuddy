import React, {useState} from 'react'


const Header =()=> {

    const [searchState, setSearchState] = useState("")

    const handleInputChange = event => {
        const value = event.target.value;
        
    }

    const submitValue = () => {
        
    }



    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img className= "logoImg" src= 'https://oaktonoutlook.com/wp-content/uploads/2019/03/Best-BUddies-color-900x688.jpg' alt='logo' /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">Buddies</a>
                    <a className="nav-link" href="#">Senseis</a>
                </div>
            </div>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=> setSearchState(searchState)}>Search</button>
            </form>
        </nav>
    )
}

export default Header