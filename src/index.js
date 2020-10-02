import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import Card from "./components/Card";
ReactDOM.render(
  <Card
    title="Tecnica de calistecnia"
    description="lorem ipsumn"
    img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
    leftcolor="#A74CF2"
    rightcolor="#617BFB"
  ></Card>,
  document.getElementById("root")
);
