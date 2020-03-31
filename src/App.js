import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./screens/home/";
import Todopage from "./screens/todopage/";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/todopage">
          <Todopage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
