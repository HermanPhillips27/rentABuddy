import React, { useState, useEffect } from "react";
import axios from "axios";
import SignUp from "../SignUp/SignUp";
import Dropdown from 'react-bootstrap/Dropdown'
import AddToCartBtn from "../Buttons/AddtoCartBtn"

const Jumbotron = () => {

  const [sale, setSale]= useState([])
  useEffect(() => {
    axios.get("/api/buddies", {params: {name: "Jesus Christ"}}).then((res)=> {
      setSale(res.data)
    })
  }, [])


  return (
    <div style={{ paddingLeft: "70px", paddingRight: "70px", height: "450px" }}>
      <div class="jumbotron welcomeSign" style= {{height: "inherit"}}>
        <div class="container">
          <h1 class="display-4">Welcome Gamers!</h1>
          <h3>ON SALE!</h3>
          <p class="lead">This week Jesus Christ himself is on sale!</p>


          {sale.map((personForSale, i) => (
            <div className="card saleCard" key={i}>
            <img
              src={personForSale.imgURL}
              className="card-img-top"
              alt="image"
              style={{ height: "220px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{personForSale.name}</h5>
              <p className="card-text">{personForSale.price} $</p>
            </div>
            <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                  Game
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item >Valorant</Dropdown.Item>
                  <Dropdown.Item >
                    Fortnite
                  </Dropdown.Item>
                  <Dropdown.Item >
                    Among Us
                  </Dropdown.Item>
                  <Dropdown.Item >
                    Minecraft
                  </Dropdown.Item>
                  <Dropdown.Item >
                    Call of Duty
                  </Dropdown.Item>
                  <Dropdown.Item >
                    Apex Legends
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <AddToCartBtn className= "pb-3" person={personForSale} />
            </div>
          ))}
          <SignUp/>
        </div>
        
      </div>
    </div>
  );
};

export default Jumbotron;
