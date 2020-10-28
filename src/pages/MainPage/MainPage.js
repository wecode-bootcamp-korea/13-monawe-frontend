import React, { Component } from "react";
import Nav from "../components/Nav/Nav";
import MyCurator from "../components/Nav/MyCurator/MyCurator";
import SearchBox from "../components/Nav/SearchBox/SearchBox";
import MonaweStory from "./components/MonaweStory/MonaweStory";
import "./MainPage.scss";
import Footer from "../components/Footer/Footer"
import ProductRecommendation from "./components/ProductRecommendation/ProductRecommendation";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      isMyCurator: false,
      isSearchBox: false
    };
  }

  handleMyCurator = e => {
    this.setState({ isMyCurator: !this.state.isMyCurator });
  };

  handleSearchBox = e => {
    this.setState({ isSearchBox: !this.state.isSearchBox });
  };

  render() {
    return (
      <>
        <header>
          <Nav
            onMyCurator={this.handleMyCurator}
            onSearchBox={this.handleSearchBox}
          />
          <MyCurator
            isMyCurator={this.state.isMyCurator}
            onMyCurator={this.handleMyCurator}
          />
          <SearchBox
            isSearchBox={this.state.isSearchBox}
            onSearchBox={this.handleSearchBox}
          />
        </header>
        <main>
          <MonaweStory />
        </main>
        <Footer/>
      </>
    );
  }
}

export default MainPage;
