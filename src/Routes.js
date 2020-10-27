import React, { Component } from "react";
import MainPage from "./pages/MainPage/MainPage";
import StationeryList from "./pages/StationeryList/StationeryList";
import ProductList from "./pages/components/ProductList/ProductList";
import ProductListNav from "./pages/components/ProductListNav/ProductListNav";
import navdata from "./pages/components/ProductListNav/navdata";
import Product from "./pages/components/ProductList/Product";
import Paging from "./pages/components/ProductList/Paging/Paging";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import Welcome from "./pages/Welcome/Welcome";
import JoinStepOne from "./pages/JoinSteps/JoinStepOne";
import JoinStepTwo from "./pages/JoinSteps/JoinStepTwo";
import JoinStepThree from "./pages/JoinSteps/JoinStepThree";
import Login from "./pages/Login/Login";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/StationeryList" component={StationeryList} />
          <Route
            exact
            path="/ProductList/product/list?category=1&order_by=:orderBy&page_number=:pageNumber&item_per_page=:itemPerPage"
            component={ProductList}
          />
          <Route exact path="/ProductListNav" component={ProductListNav} />
          <Route exact path="/navdata" component={navdata} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/Paging" component={Paging} />
          <Route exact path="/detail/:id" component={DetailPage} />
          <Route exact path="/Welcome" component={Welcome} />
          <Route exact path="/JoinStepOne" component={JoinStepOne} />
          <Route exact path="/JoinStepTwo" component={JoinStepTwo} />
          <Route exact path="/JoinStepThree" component={JoinStepThree} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
