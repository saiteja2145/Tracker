import React from "react";
import Global from "./Global";
import Headers from "./components/Header/Headers.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import India from "./components/India/India";
import IndiaStateWise from "./components/IndianStatesWise/IndianStateWise";

const App = () => {
  return (
    <Router>
      <Headers />
      <Switch>
        <Route path="/" exact>
          <Global />
        </Route>
        <Route path="/india">
          <India />
        </Route>
        <Route path="/indiaStateWise">
          <IndiaStateWise />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
