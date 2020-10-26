import React, { Component } from "react";
import MainPage from "./pages/MainPage/MainPage";
import StationeryList from "./pages/StationeryList/StationeryList";
import ProductList from "./pages/components/ProductList/ProductList";
import ProductListNav from "./pages/components/ProductListNav/ProductListNav";
import navdata from "./pages/components/ProductListNav/navdata";
import Product from "./pages/components/ProductList/Product";
import Paging from "./pages/components/ProductList/Paging/Paging";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/StationeryList" component={StationeryList} />
          <Route exact path="/ProductList" component={ProductList} />
          <Route exact path="/ProductListNav" component={ProductListNav} />
          <Route exact path="/navdata" component={navdata} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/Paging" component={Paging} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
