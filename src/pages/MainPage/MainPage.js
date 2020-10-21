import React, { Component } from "react";
import Nav from "../components/Nav/Nav";
import "./MainPage.scss";

class MainPage extends Component {
  render() {
    return (
      <div>
        <header>
          <Nav />
        </header>
      </div>
    );
  }
}

export default MainPage;
