import React, { Suspense, lazy } from "react";
import Global from "./Global";
import Headers from "./components/Header/Headers.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import India from "./components/India/India";

import Spinner from "./components/Global/Spinner/Spinner";

const IndiaStateWiseLazy = lazy(() =>
  import("./components/IndianStatesWise/IndianStateWise")
);

const App = () => {
  return (
    <Router>
      <Headers />
      <Switch>
        <Route path="/" exact>
          <India />
        </Route>
        <Route path="/global">
          <Global />
        </Route>
        <Route path="/indiaStateWise">
          <Suspense fallback={<Spinner />}>
            <IndiaStateWiseLazy />
          </Suspense>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
