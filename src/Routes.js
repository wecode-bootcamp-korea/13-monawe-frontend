import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import Welcome from "./pages/Welcome/Welcome";
import JoinStepOne from "./pages/JoinSteps/JoinStepOne";
import JoinStepTwo from "./pages/JoinSteps/JoinStepTwo";
import JoinStepThree from "./pages/JoinSteps/JoinStepThree";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import ProductList from "./pages/ProductList/ProductList";
import NavContainer from "./pages/components/NavContainer/NavContainer";
import MyPageContainer from "./pages/MyPage/MyPageContainer";
import Footer from "./pages/components/Footer/Footer";

class Routes extends Component {
  render() {
    return (
      <Router>
        <NavContainer />
        <Switch>
          <Route exact path="/detail/:id" component={DetailPage} />
          <Route exact path="/Welcome" component={Welcome} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/JoinStepOne" component={JoinStepOne} />
          <Route exact path="/JoinStepTwo" component={JoinStepTwo} />
          <Route exact path="/JoinStepThree" component={JoinStepThree} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/detail/:id" component={DetailPage} />
          <Route exact path="/MyPage" component={MyPageContainer} />
          <Route exact path="/ProductList" component={ProductList} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
