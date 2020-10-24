import React, { Component } from "react";
import "./MainPage.scss";
import ProductRecommendation from "./components/ProductRecommendation/ProductRecommendation";

class MainPage extends Component {
  render() {
    return (
      <div>
        <ProductRecommendation />
      </div>
    );
  }
}

export default MainPage;
