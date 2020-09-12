import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CartContext from "../../utils/cartContext";
import AddToCartBtn from '../Buttons/AddtoCartBtn'
import Dropdown from 'react-bootstrap/Dropdown'

const SenseiCard = () => {
  const cartContext = useContext(CartContext);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios.get("/api/teachers").then((res) => {
      setPeople(res.data);
    });
  }, []);

  // console.log(people)
  return (
    <div className="container">
      <div className="row">
        {people.map((person, i) => (
          <div className="col-3 pb-3">
            <div className="card" key={i}>
              <img
                src={person.imgURL}
                className="card-img-top"
                alt="image"
                style={{ height: "220px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">{person.price} $</p>
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
                <AddToCartBtn person={person} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SenseiCard;
