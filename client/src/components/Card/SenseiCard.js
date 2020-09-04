import React, {useState, useEffect} from "react";
import axios from "axios";

const SenseiCard = () => {
    const [people, setPeople] = useState([])
    useEffect(() => {
        axios.get("/api/teachers").then(res => {
            setPeople(res.data)
            
        })
    },[])
    
  console.log(people)
  return (
    <>
        {people.map((person)=>
        <div className="card">
        <img src={person.imgURL} className="card-img-top" alt="image" />
        <div className="card-body">
          <h5 className="card-title">{person.name}</h5>
          <p className="card-text">{person.price} $</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        )}
    </>
  );
};

export default SenseiCard;
