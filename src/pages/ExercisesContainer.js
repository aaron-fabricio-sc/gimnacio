import React from "react";
import Exercises from "./Exercises";
import Loading from "../components/Loading";
import ErrorServer from "./500";
import useFetch from "../hooks/useFetch";
import url from "../settings";
const ExercisesContainer = () => {
  const { data, loading, error } = useFetch(`${url}/exercises`);

  if (loading) return <Loading />;
  if (error) return <ErrorServer />;
  return <Exercises data={data} />;
};

/* class ExercisesContainer extends React.Component {
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
    return <Exercises data={this.state.data} />;
  }
} */

export default ExercisesContainer;
