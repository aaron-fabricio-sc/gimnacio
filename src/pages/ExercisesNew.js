import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";
import "../components/styles/ExerciseNew.css";
import ErrorServer from "./500";
class ExerciseNew extends React.Component {
  state = {
    form: {
      title: "",
      description: "",
      img: "",
      leftColor: "",
      rightColor: "",
    },
    loading: false,
    error: null,
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = async (e) => {
    this.setState({
      loading: true,
    });
    e.preventDefault();
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.form),
      };
      let res = await fetch("http://localhost:8000/api/exercises", config);
      let json = await res.json();
      this.setState({
        loading: false,
      });
      this.props.history.push("/exercises");
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };

  render() {
    if (this.state.error) return <ErrorServer />;
    return (
      <div className="w-100 d-flex justify-content-center align-items-center contenedor">
        <div className="row">
          <div className="col-sm">
            <Card {...this.state.form} />
          </div>
          <div className="col-sm">
            <ExerciseForm
              onChange={this.handleChange}
              form={this.state.form}
              onSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ExerciseNew;
