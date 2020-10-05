import React from "react";
import "./styles/ExerciseForm.css";

const ExerciseForm = ({ onChange, form, onSubmit }) => {
  return (
    <div className="container form-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="title"
            name="title"
            onChange={onChange}
            value={form.title}
          ></input>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="description"
            name="description"
            onChange={onChange}
            value={form.description}
          ></input>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="img"
            name="img"
            onChange={onChange}
            value={form.img}
          ></input>
        </div>
        <div className="form-row">
          <div className=" col">
            <input
              className="form-control"
              type="text"
              placeholder="leftColor"
              name="leftColor"
              onChange={onChange}
              value={form.leftColor}
            ></input>
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="rightColor"
              name="rightColor"
              onChange={onChange}
              value={form.rightColor}
            ></input>
          </div>
        </div>
        <button type="submit" className="btn btn-info my-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExerciseForm;
