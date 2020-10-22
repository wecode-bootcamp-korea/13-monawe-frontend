import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Login from "./pages/Login/Login";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
