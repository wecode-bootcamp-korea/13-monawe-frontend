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
<<<<<<< HEAD
import AddressList from "./pages/MyPage/components/Address/AddressList";
=======
import NavContainer from "./pages/components/NavContainer/NavContainer";
import MyPageContainer from "./pages/MyPage/MyPageContainer";
import Footer from "./pages/components/Footer/Footer";
>>>>>>> 34339647595fbdb4d6e67bab133bee2bd8d27fe1

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
<<<<<<< HEAD
          <Route exact path="/AddressList" component={AddressList} />
=======
          <Route exact path="/" component={MainPage} />
          <Route exact path="/detail/:id" component={DetailPage} />
          <Route exact path="/MyPage" component={MyPageContainer} />
>>>>>>> 34339647595fbdb4d6e67bab133bee2bd8d27fe1
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
