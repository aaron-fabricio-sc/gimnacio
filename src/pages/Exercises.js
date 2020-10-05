import React from "react";
import ExercisesList from "../components/ExercisesList";
import Welcome from "../components/Welcome";
import Button from "../components/AddBotton";
const Exercises = ({ data }) => {
  return (
    <div>
      <Welcome name="Aaron" />
      <ExercisesList exercises={data} />
      <Button />
    </div>
  );
};

export default Exercises;
