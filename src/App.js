import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExercisesContainer from "./pages/ExercisesContainer";
import ExerciseNewContainer from "./pages/ExercisesNewContainer";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/exercises" component={ExercisesContainer} />
        <Route exact path="/ExercisesNew" component={ExerciseNewContainer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
