import React, { Component } from "react";
import MonaweStory from "./components/MonaweStory/MonaweStory";
import ProductRecommendation from "./components/ProductRecommendation/ProductRecommendation";
import "./MainPage.scss";

class MainPage extends Component {
  render() {
    return (
      <main className="mainContents">
        <ProductRecommendation />
        <MonaweStory />
      </main>
    );
  }
}

export default MainPage;
