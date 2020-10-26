import React, { Component } from "react";
import ProductRecommendation from "./pages/MainPage/components/ProductRecommendation/ProductRecommendation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import ProductDetail from "./pages/DetailPage/Components/ProductDetail/ProductDetail";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ProductRecommendation} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
