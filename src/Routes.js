import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JoinStep2 from "./pages/JoinStep2/JoinStep2";
import MainPage from "./pages/MainPage/MainPage";
import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/Login/Login";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/Welcome" component={Welcome} />
          <Route exact path="/JoinStep2" component={JoinStep2} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
