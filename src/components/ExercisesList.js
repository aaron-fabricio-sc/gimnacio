import React from "react";
import Card from "./Card";

const ExercisesList = ({ exercises }) => {
  return (
    <div>
      {exercises.map((exercise) => {
        return <Card key={exercise.id} {...exercise}></Card>;
      })}
    </div>
  );
};

export default ExercisesList;
