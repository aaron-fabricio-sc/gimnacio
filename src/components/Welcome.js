import React from "react";

import "./styles/Welcome.css";
const Welcome = ({ name }) => {
  return (
    <div className="container">
      <div className="Fitness-User-Info">
        <h1>Welcome {name}</h1>
        <p>Estas listo para entrenar?</p>
      </div>
    </div>
  );
};

export default Welcome;
