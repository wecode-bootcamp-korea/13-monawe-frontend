import React, { Component } from "react";
import MonaweStory from "./components/MonaweStory/MonaweStory";
import ProductRecommendation from "./components/ProductRecommendation/ProductRecommendation";
import MainBanner from "./components/MainBanner/MainBanner";
import "./MainPage.scss";

class MainPage extends Component {
  render() {
    return (
      <main className="mainContents">
        <MainBanner />
        <ProductRecommendation />
        <MonaweStory />
      </main>
    );
  }
}

export default MainPage;
