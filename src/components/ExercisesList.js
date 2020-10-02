import React from "react";
import Card from "./Card";
const ExercisesList = ({ exercises }) => {
  return (
    <div>
      {exercises.map((exercise) => {
        return (
          <Card
            key={exercise.id}
            title={exercise.title}
            description={exercise.description}
            img={exercise.img}
            leftcolor={exercise.leftColor}
            rightcolor={exercise.rightColor}
          ></Card>
        );
      })}
    </div>
  );
};

export default ExercisesList;
