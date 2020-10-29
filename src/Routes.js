import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import StationeryList from "./pages/StationeryList/StationeryList";
import Paging from "./pages/components/ProductList/Paging/Paging";
import DetailPage from "./pages/DetailPage/DetailPage";
import Welcome from "./pages/Welcome/Welcome";
import JoinStepOne from "./pages/JoinSteps/JoinStepOne";
import JoinStepTwo from "./pages/JoinSteps/JoinStepTwo";
import JoinStepThree from "./pages/JoinSteps/JoinStepThree";
import Login from "./pages/Login/Login";
import MainBanner from "./pages/MainPage/components/MainBanner/MainBanner";
import NavContainer from "./pages/components/NavContainer/NavContainer";
import MyPageContainer from "./pages/MyPage/MyPageContainer";
import Footer from "./pages/components/Footer/Footer";

class Routes extends Component {
  render() {
    return (
      <Router>
        <NavContainer />
        <Switch>
          <Route exact path="/StationeryList" component={StationeryList} />
          <Route exact path="/Paging" component={Paging} />
          <Route exact path="/detail/:id" component={DetailPage} />
          <Route exact path="/Welcome" component={Welcome} />
          <Route exact path="/JoinStepOne" component={JoinStepOne} />
          <Route exact path="/JoinStepTwo" component={JoinStepTwo} />
          <Route exact path="/JoinStepThree" component={JoinStepThree} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/detail/:id" component={DetailPage} />
          <Route exact path="/MyPage" component={MyPageContainer} />
          <Route exact path="/MainBanner" component={MainBanner} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
