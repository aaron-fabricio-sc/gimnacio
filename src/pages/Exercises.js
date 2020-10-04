import React from "react";
import ExercisesList from "../components/ExercisesList";
import Welcome from "../components/Welcome";
import Button from "../components/AddBotton";
import Loading from "../components/Loading";
import ErrorServer from "./500";
class Exercises extends React.Component {
  state = {
    data: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    await this.fetchExercises();
  }
  fetchExercises = async () => {
    try {
      let response = await fetch("http://localhost:8000/api/exercises");
      let data = await response.json();
      console.log(data);

      this.setState({
        data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };

  render() {
    if (this.state.loading) return <Loading />;
    if (this.state.error) return <ErrorServer />;
    return (
      <div>
        <Welcome name="Aaron" />
        <ExercisesList exercises={this.state.data} />
        <Button />
      </div>
    );
  }
}

export default Exercises;
