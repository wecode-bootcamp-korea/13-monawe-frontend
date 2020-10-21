import React, { Component } from "react";
import MainPage from "./pages/MainPage/MainPage";
import StationeryList from "./pages/StationeryList/StationeryList";
import ProductList from "./pages/components/ProductList/ProductList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/StationeryList" component={StationeryList} />
          <Route exact path="/ProductList" component={ProductList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
