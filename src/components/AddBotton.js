import React from "react";
import Button from "../images/add.png";
import { Link } from "react-router-dom";
import "./styles/AddButton.css";
function AddButton() {
  return (
    <Link className="Fitness-Add" to="/ExercisesNew">
      <img src={Button}></img>
    </Link>
  );
}

export default AddButton;
