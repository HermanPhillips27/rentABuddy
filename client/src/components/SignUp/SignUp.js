import Axios from "axios";
import React, { useEffect, useState } from "react";
import saveBuddy from '../../utils/API'

const SignUp = () => {
  const [buddySignUp, setbuddySignUp] = useState({
    name: "",
    price: "",
    imgURL: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setbuddySignUp({
      ...buddySignUp, [name]: value
    })
  };

  const onSubmit = () => {
    saveBuddy(buddySignUp)
  }
  console.log(buddySignUp)
  return (
    <div class="card signUp" style={{ width: "20rem" }}>
      <div className= "card-header"> <h5 className= "card-title">Sign up to be a Buddy!</h5></div>
      <div className= "card-body">
      <form onSubmit= {onSubmit}>
        <div class="form-group mx-sm-3 mb-2">
          <label for="exampleInputEmail1">Name</label>
          <input
            onChange={handleChange}
            name= "name"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Pete Mudbone"
          />
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <label for="inputPassword2">Price</label>
          <input
            name= "price"
            onChange={handleChange}
            type="number"
            class="form-control"
            id="inputPassword2"
            placeholder="0123456789"
          />
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <label for="ImageURL">Image Url</label>
          <input
            name= "imgURL"
            onChange={handleChange}
            class="form-control"
            id="ImageURL"
            type= "text"
            placeholder="poop.jpg"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check if you will miss Jim
          </label>
        </div>
        <button type="submit" class="btn btn-info">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default SignUp;
