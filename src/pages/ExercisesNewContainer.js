import React from "react";
import ExercisesNew from "./ExercisesNew";
import "../components/styles/ExerciseNew.css";
import ErrorServer from "./500";
import url from "../settings";
class ExerciseNewContainer extends React.Component {
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
      let res = await fetch(`${url}/exercise`, config);
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
      <ExercisesNew
        form={this.state.form}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}

export default ExerciseNewContainer;
