import React from "react";

const Jumbotron = () => {
  return (
    <div style= {{paddingLeft: "70px", paddingRight: "70px"}}>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Welcome Gamers!</h1>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
