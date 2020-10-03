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
            leftColor={exercise.leftColor}
            rightColor={exercise.rightColor}
          ></Card>
        );
      })}
    </div>
  );
};

export default ExercisesList;
