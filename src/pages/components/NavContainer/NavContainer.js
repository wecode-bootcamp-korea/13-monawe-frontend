import React, { Component } from "react";
import Nav from "./Nav/Nav";
import MyCurator from "./MyCurator/MyCurator";
import SearchBox from "./SearchBox/SearchBox";
import "./NavContainer.scss";

class NavContainer extends Component {
  constructor() {
    super();
    this.state = {
      userName: null,
      isMyCurator: false,
      isSearchBox: false
    };
  }

  componentDidMount() {
    const userName = localStorage.getItem("name");
    this.setState({ userName: userName });
  }

  handleMyCurator = e => {
    this.setState({ isMyCurator: !this.state.isMyCurator });
  };

  handleSearchBox = e => {
    this.setState({ isSearchBox: !this.state.isSearchBox });
  };

  handleLogOut = e => {
    this.setState({ userName: null, isMyCurator: false, isSearchBox: false });
  };

  render() {
    const { userName } = this.state;

    return (
      <header className="NavContainer">
        <Nav
          userName={userName}
          onMyCurator={this.handleMyCurator}
          onSearchBox={this.handleSearchBox}
        />
        <MyCurator
          userName={userName}
          isMyCurator={this.state.isMyCurator}
          onMyCurator={this.handleMyCurator}
          onLogOut={this.handleLogOut}
        />
        <SearchBox
          isSearchBox={this.state.isSearchBox}
          onSearchBox={this.handleSearchBox}
        />
      </header>
    );
  }
}

export default NavContainer;
