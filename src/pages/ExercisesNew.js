import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";
const ExercisesNew = ({ form, onChange, onSubmit }) => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center contenedor">
      <div className="row">
        <div className="col-sm">
          <Card {...form} />
        </div>
        <div className="col-sm">
          <ExerciseForm onChange={onChange} form={form} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ExercisesNew;
